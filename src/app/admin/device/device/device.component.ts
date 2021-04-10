import { Component, OnInit } from '@angular/core';
import {HttpRequestService} from '../../../utils/promise/promise';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  public Devices: Array<Device> = [];
  public DevicesInfo: object;
  public LoadingBoolean: boolean;
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.LoadingBoolean = true;
    const url = '/api/device';
    this.http.get(url).subscribe(data => {
      if (typeof data === 'object'){
        this.DevicesInfo = data;
        // @ts-ignore
        this.Devices = this.DevicesInfo.data;
        this.LoadingBoolean = false;
      }
      // console.log(data);
    });
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
