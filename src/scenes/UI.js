import Phaser from "phaser";
import { sharedInstance as events } from "./EventCenter";

export class UI {
  scene; 
  constructor(scene) {
    this.scene=scene;
    this.create();
  }

  create() {
    console.log("ui");
    this.power = this.scene.add.image(150, 60, "uipower").setScale(0.9).setScrollFactor(0);

    this.textopuntos = this.scene.add.text(122, 40, "0/30", {
      font: "40px Kanit",
    }).setScrollFactor(0);

   this.infla = this.scene.add.image(350, 60, "inflaUI").setScale(0.9).setScrollFactor(0);

    this.textoinflador = this.scene.add.text(350, 40, "0/5", {
      font: "40px Kanit",
    }).setScrollFactor(0);
   
    this.crono = this.scene.add.image(1250, 50, "cronometro").setScale(0.4).setScrollFactor(0); 
    
    this.timeText = this.scene.add.text(1220, 30, this.scene.TiempoInicial, {
      fontSize: "50px", fontFamily: "Kanit" 
    }).setScrollFactor(0);

    this.teclas = this.scene.add.image(1250, 720, "teclas").setScale(0.5).setScrollFactor(0);
    

    events.on("point-changed", this.handlePointChanged, this);
    events.on("time-changed", this.handleTimeChanged, this);
    events.on("infla-changed", this.handleInflaChanged, this);
  }

  handlePointChanged(points) {
    //console.log("puntos", points);
    this.textopuntos.setText(points + "/30");

  }

  handleInflaChanged(infla) {
    this.textoinflador.setText(infla + "/5"); }

  handleTimeChanged(time) {
    this.timeText.setText(time);
  }
}
