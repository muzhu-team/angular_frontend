import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  public Devices: Array<Device> = [];
  constructor() { }

  ngOnInit(): void {
  }

}


export class Device{
  constructor(
    public ID: number,
    public Type: number,
    public Name: string,
    public Photo: string,
    public Model: string,
    public PurchaseDate: number,
    public Manufacturer: string,
    public StatusNum: number,
    public UserID: number,
  ){

  }
}
