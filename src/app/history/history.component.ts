import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
  textoInicial: string = `¡Desde mis primeros días como aprendiz de albañil, siempre tuve una visión clara de que mi destino iba más allá
  de simplemente levantar muros y estructuras. Criado en una familia humilde, aprendí el valor del trabajo arduo y
  la perseverancia desde muy joven. Cada día, bajo el sol abrasador o la lluvia torrencial, me sumergía en el
  mundo de la construcción con la firme convicción de que mi camino estaba destinado a algo más grande.

  Mi espíritu emprendedor nunca cesó de arder. A medida que ascendía en la jerarquía y me convertía en maestro de
  obras, sabía que mi verdadera pasión iba más allá de dirigir proyectos; quería forjar mi propio camino como
  empresario. Fue entonces cuando surgió la oportunidad de fundar una emisora de radio local, "La voz de
  Becerril", un proyecto que no solo me apasionaba, sino que también ofrecía una plataforma para inspirar y
  conectar con mi comunidad.`
  textoCompleto: string = `¡Desde mis primeros días como aprendiz de albañil, siempre tuve una visión clara de que mi destino iba más allá
  de simplemente levantar muros y estructuras. Criado en una familia humilde, aprendí el valor del trabajo arduo y
  la perseverancia desde muy joven. Cada día, bajo el sol abrasador o la lluvia torrencial, me sumergía en el
  mundo de la construcción con la firme convicción de que mi camino estaba destinado a algo más grande.

  Mi espíritu emprendedor nunca cesó de arder. A medida que ascendía en la jerarquía y me convertía en maestro de
  obras, sabía que mi verdadera pasión iba más allá de dirigir proyectos; quería forjar mi propio camino como
  empresario. Fue entonces cuando surgió la oportunidad de fundar una emisora de radio local, "La voz de
  Becerril", un proyecto que no solo me apasionaba, sino que también ofrecía una plataforma para inspirar y
  conectar con mi comunidad.
  Hoy en día, mi trayectoria de vida es una amalgama de experiencias que van desde los días de trabajo en la
  construcción hasta la fundación de una emisora de radio y finalmente, mi éxito como empresario networker. Cada paso en mi camino ha sido una lección invaluable y una oportunidad para crecer y evolucionar. Mi
  historia es un testimonio de que con visión, pasión y trabajo arduo, los sueños más grandes pueden convertirse
  en realidad. Y aunque mi camino sigue adelante, siempre estaré agradecido por las experiencias que me han
  llevado hasta aquí y emocionado por las aventuras que el futuro tiene reservadas.`


  botonPosicionDerecha: boolean = false;
  mostrarMas: boolean = true;

  toggleMostrarMas() {
    this.mostrarMas = !this.mostrarMas;
    this.botonPosicionDerecha = !this.botonPosicionDerecha;
  }
}
