import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {
  constructor(private camera: Camera) {}

  ngOnInit() {}
  capturedSnapURL: string;
  cameraOptions: CameraOptions = {
    quality: 20,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
  };
  openCam() {
    this.camera.getPicture(this.cameraOptions).then(
      (imageData) => {
        let base64Image = 'data:image/jpeg;base64,' + imageData;
        this.capturedSnapURL = base64Image;
      },
      (err) => {
        console.log(err);
        //Handleerror
      }
    );
  }
}
