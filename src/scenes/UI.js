import Phaser from "phaser";
import { sharedInstance as events } from "./EventCenter";

export default class UI extends Phaser.Scene {
  constructor() {
    super("ui");
  }

  create() {
    console.log("ui");
    this.add.image(150, 60, "uipower").setScale(0.9);

    this.timeText = this.add.text(1190, 30, "", { fontSize: "50px" });

    this.textopuntos = this.add.text(120, 50, "0/30", {
      font: "40px",
    });

    this.add.image(350, 60, "inflaUI").setScale(0.9);

    this.textoinflador = this.add.text(350, 50, "0/5", {
      font: "40px",
    });
   

    this.timeText = this.add.text(1220, 38, "", {
      font: "40px",
    });

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
