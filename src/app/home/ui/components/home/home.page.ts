import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HomeService} from "../../../data/services/home.service";
import {VehiclesService} from "../../../data/services/vehicles.service";
import {VehicleMake} from "../../../data/models/vehicleMake";
import {VehicleModel} from "../../../data/models/vehicleModel";
import {HelperService} from "../../../data/services/helper.service";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  addForm!: FormGroup;
  vehicleMakes: VehicleMake[] = [];
  vehicleModels: VehicleModel[]  = [];
  constructor(private fb: FormBuilder,
              private service: HomeService,
              private vehicleService: VehiclesService,
              private helperService: HelperService,
              private toastController: ToastController,
              ) {}

  ngOnInit() {
    this.addForm = this.fb.group({
      vehicle_make_name: [Validators.required],
      vehicle_model_name: [Validators.required],
      vehicle_years: [null ,[Validators.required, this.helperService.isValidYear]],
    });
    this.vehicleMakes = this.vehicleService.getAllVehicleMake();
  }

  onVehicleMakeChange(event: any) {
    this.vehicleModels = this.vehicleService.getModelsByVehicleMakeId(event.detail.value)
  }

  onUpdate(): void {
    this.service.updateVehicle(this.addForm.value).subscribe(async (res: any) => {
      const toast = await this.toastController.create({
        message: 'Vehicle Updated..',
        duration: 1500,
        position: 'bottom',
        color: 'success'
      });
      await toast.present();
      console.log('res', res);
    });
  }
}
