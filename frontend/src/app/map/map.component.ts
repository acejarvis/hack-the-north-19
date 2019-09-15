import { Component, OnInit } from '@angular/core';
import { MapService } from './map.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

function hello(){

alert("Hello!!!");

}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  ngOnInit() {
    this.mapService.getHeatPoints().subscribe(result => {
      console.log(result);
      console.log(result[0].latitude);
      this.markers = result[0].latitude, result[0].longitude;
      console.log(this.markers);
    });
    this.mapService.getCurrentPosition().subscribe(result => {
      console.log(result);
      this.map.lat = result.coords.latitude;
      this.map.lng = result.coords.longitude;
    });

    hello();
    
  }

  closeResult: string;

  constructor(
    private modalService: NgbModal,
    private mapService: MapService) {}


    open(content, type, modalDimension) {
        if (modalDimension === 'sm' && type === 'modal_mini') {
            this.modalService.open(content, { windowClass: 'modal-mini', size: 'sm', centered: true }).result.then((result) => {
                this.closeResult = 'Closed with: $result';
            }, (reason) => {
                this.closeResult = 'Dismissed $this.getDismissReason(reason)';
            });
        } else if (modalDimension === '' && type === 'Notification') {
          this.modalService.open(content, { windowClass: 'modal-danger', centered: true }).result.then((result) => {
              this.closeResult = 'Closed with: $result';
          }, (reason) => {
              this.closeResult = 'Dismissed $this.getDismissReason(reason)';
          });
        } else {
            this.modalService.open(content,{ centered: true }).result.then((result) => {
                this.closeResult = 'Closed with: $result';
            }, (reason) => {
                this.closeResult = 'Dismissed $this.getDismissReason(reason)';
            });
        }
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  'with: $reason';
        }
    }


  public map: any = { };

   markers: any[];


  


}
