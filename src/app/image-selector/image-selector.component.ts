import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-selector',
  templateUrl: './image-selector.component.html',
  styleUrls: ['./image-selector.component.scss']
})

export class ImageSelectorComponent implements OnInit {
  public imgS = "";
  public img1 = "https://i.kym-cdn.com/entries/icons/original/000/026/638/cat.jpg";
  public img2 = "https://i.pinimg.com/564x/dd/d2/bb/ddd2bb3f0fb29f6daf9bc391ed564f17.jpg";
  public img3 = "https://megastar-cdnmed.agilecontent.com/resources/jpg/8/7/1580281726178.jpg";

  selectImg1(){
    this.imgS = this.img1;
  }
  selectImg2(){
    this.imgS = this.img2;
  }
  selectImg3(){
    this.imgS = this.img3;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
