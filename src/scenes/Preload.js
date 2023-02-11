import Phaser from "phaser";
import MenuPrincipal from "./MenuPrincipal";

export default class Preload extends Phaser.Scene {
  preload() {
    this.load.image("FondoNivelUno", "./assets/fondocompletoN1.png");
    this.load.image("FondoNivelDos", "./assets/fondoNivel2.png");
    this.load.image("SueloNivelUno", "./assets/suelocompletoN1.png");
    this.load.spritesheet("Jugador", "./assets/pelota.png", {
      frameWidth: 32,
      frameHeight: 48,
    });

    this.load.image("p1", "./assets/plataformachica.png");
    this.load.image("p2", "./assets/plataformagrande.png");
    this.load.image("flecha", "./assets/flechacasa.png");
    this.load.image("teclas", "./assets/controles.png");
    this.load.image("power", "./assets/brillo.png");
    this.load.image("uipower", "./assets/uibrillos.png");
    this.load.image("cronometro", "./assets/tiempo.png");
    this.load.image("reloj", "./assets/relojtiempo.png");
    this.load.image("FondoWin", "./assets/tesalvaste.png");
    this.load.image("BotonS", "./assets/botonsiguiente.png");
    this.load.image("BotonM", "./assets/botonmenu.png");
    this.load.image("FondoC", "./assets/fondosolo.png");
    this.load.image("FondoCre", "./assets/fondocreditos.png");
    this.load.image("BotonM", "./assets/botonmenu.png");
    this.load.image("FondoM", "./assets/fondomenu.png");
    this.load.image("BotonJ", "./assets/botonjugar.png");
    this.load.image("BotonI", "./assets/botoninfo.png");
    this.load.image("BotonN2", "./assets/botonreinicio.png");
    this.load.image("perdiste", "./assets/tepinchaste.png");
    this.load.image("FondoTuto", "./assets/tutorialN1.png");
    this.load.image("tuto2", "./assets/tutorialN2.png");
    this.load.image("BanderaEEUU", "./assets/eeuu.png");
    this.load.image("BanderaArg", "./assets/argentina.png");
    this.load.image("inflaUI", "./assets/uiinflador.png");
    this.load.image("inflador", "./assets/inflador.png");
  }
  create() {
    this.scene.start("MenuPrincipal");
  }
}
