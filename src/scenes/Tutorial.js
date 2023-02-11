import Phaser from "phaser";
import { getPhrase } from "../services/translations";

export default class Tutorial extends Phaser.Scene {
  constructor() {
    super("TutorialJuego");
  }

  init(data) {
    this.nivel = data.nivel;
  }

  create() {

    this.add.image(0, 0, "FondoTuto").setOrigin(0).setScale(0.5);
    const botontuto = this.add
      .image(550, 500, "BotonJ")
      .setOrigin(0)
      .setScale(0.3);
    botontuto.setInteractive();
    botontuto.on("pointerdown", () =>
      this.scene.start("Juego", { nivel: this.nivel })
    );

    
    this.text = this.add
      .text(510, 100, getPhrase("TUTORIAL"), { fontSize: "150px", fontFamily:"Ultra"} )
      .setScale(0.4);

    this.text = this.add
    .text(390, 400, getPhrase("USA LAS FLECHAS DE TU TECLADO Y JUNTA TODOS LOS BRILLOS ANTES DE QUE TERMINE EL TIEMPO PARA PASAR AL SIGUIENTE NIVEL"),  {font: "40px Ultra", wordWrap: {width: 1800 }}) 
      .setScale(0.4);
  }
}
