import { Injectable } from '@angular/core';
import {VEHICLES_MODELS} from "../constants/vehicles";
import {VehicleMake} from "../models/vehicleMake";
import {VehicleModel} from "../models/vehicleModel";

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  vehiclesModals = VEHICLES_MODELS;
  constructor() { }

  getAllVehicleMake(): VehicleMake[] {
    const uniqueMakes: {
      [key: number]: string
    } = {};
    this.vehiclesModals.forEach((each: any) => {
      uniqueMakes[each.MakeID] = each.Make;
    });

    return Object.keys(uniqueMakes).map(MakeID => ({
      MakeID: parseInt(MakeID),
      Make: uniqueMakes[parseInt(MakeID)]
    }))
  }

  getModelsByVehicleMakeId(make: string): VehicleModel[] {
    const uniqueModels: { [key: number]: number } = {};

    this.vehiclesModals.forEach((each: any) => {
      if (each.Make === make) {
        uniqueModels[each.ModelID] = each.Model;
      }
    });

    return Object.keys(uniqueModels).map(ModelID => ({
      ModelID: parseInt(ModelID),
      Model: uniqueModels[parseInt(ModelID)]
    }));
  }
}
