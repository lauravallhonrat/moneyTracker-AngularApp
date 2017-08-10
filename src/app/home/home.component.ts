import { Component,OnInit, EventEmitter,Output, Input } from '@angular/core';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';
import { TransactionService } from '../transactions/transactions.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: Object;
  @Output() featureSelected = new EventEmitter<string>();

constructor(
  	private session: SessionService,
    private router: Router,
    private transactionService: TransactionService
  ) { }
  
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
      console.log(this.user)
    this.transactionService.event.subscribe((data)=>{
      console.log("user",data)
      localStorage.setItem('user', JSON.stringify(data));
      this.user = data;
      console.log(this.user)
    })
  }
//this for navigation expenses/income
  loadedOverlay = 'expense';
//loads overlay expenses html


  onNavigate(overlay: string){
    this.loadedOverlay = overlay;
  }
  logout(){
    this.session.logout();
  }

  onSelect(feature : string){
    this.featureSelected.emit(feature);
  }
 
  onHide() {
    this.overlayIncIsHidden = true;
    this.overlayIsHidden = true;
  }

  // ======= THE TOGGLING ======== // 

  overlayIsHidden = true;
  overlayIncIsHidden = true;
  //loads overlay expenses html - PAS EFFACER

  toggle_class(){
    this.overlayIsHidden = !this.overlayIsHidden;
    this.overlayIncIsHidden = true;
  }

  loadedOverlayInc = 'income';
  //loads overlay inc html - PAS EFFACER

  toggle_classInc(){
    this.overlayIncIsHidden = !this.overlayIncIsHidden;
    this.overlayIsHidden = true;
  }

  foxyes : boolean = true;

  onHover() {
    this.foxyes = !this.foxyes;
    // const el = document.querySelector('img');
    // if (el.classList.contains('is-paused')){
    // el.classList.remove('is-paused');
  }
  
  onLeave() {
    this.foxyes = !this.foxyes;
  }

  foxoh : boolean = true;

  onHoverOh() {
    this.foxoh = !this.foxoh;
  }
  
  onLeaveOh() {
    this.foxoh = !this.foxoh;
  }

  

}
