import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Parcel } from './parcel.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  public parcels: Parcel[] = [];

  public print: string = '';

  ngOnInit(): void {
    this.initParcels();
    this.printParcels();
  }

  value = '';
  update(value: string) { this.value = value; }

  printParcels(): void {
    var innerHTML = JSON.stringify(this.parcels);
    var index = innerHTML.indexOf(this.value);
    if (this.value !== '' && index >= 0) {
      console.log("2, in it")
      innerHTML = innerHTML.substring(0, index) + "<span style='color: red;background-color: yellow; '>" + innerHTML.substring(index, index + this.value.length) + "</span>" + innerHTML.substring(index + this.value.length);
    }
    this.print = innerHTML;
  }

  addParcel(): void {
    const _parcel: Parcel = {
      id: this.makeid(),
      weight: (Math.random() * 31).toFixed(2),
      destination: this.getCity()
    }
    this.parcels.push(_parcel);
    this.printParcels();
  }

  findParcel(): Parcel {
    var result: Parcel = this.parcels.find(parcel => parcel.id === this.value);    
    this.printParcels();
    return result;
  }

  removeParcel(): void {
    this.parcels = this.parcels.filter(parcel => parcel.id !== this.value);
    this.printParcels();
  }


  private initParcels(): void {
    for (var i = 0; i < 9; i++) {
      this.addParcel();
    }
  }

  private makeid(): string {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  private getCity(): string {
    const cities: string[] = [
      "Abasolo",
      "Acambaro",
      "Acambay",
      "Acapulco",
      "Acatic",
      "Acatlan de Perez Figueroa",
      "Acatzingo de Hidalgo",
      "Acolman",
      "Actopan",
      "Acuna",
      "Adolfo Lopez Mateos",
      "Adolfo Ruiz Cortines",
      "Agua Amarga",
      "Agua Azul",
      "Agua Dulce",
      "Agua Prieta",
      "Aguascalientes",
      "Ahome",
      "Ahualulco de Mercado",
      "Ajijic",
      "Alamo",
      "Alamos",
      "Aldama",
      "Allende",
      "Almada",
      "Almoloya",
      "Altamira",
      "Altotonga",
      "Alvaro Obregon Borough",
      "Amado Nervo",
      "Ameca",
      "Amecameca de Juarez",
      "Anahuac",
      "Anahuac",
      "Angamacutiro de la Union",
      "Apan",
      "Apaseo el Alto",
      "Apaseo el Grande",
      "Apatzingan",
      "Apaxco de Ocampo",
      "Apizaco",
      "Apodaca",
      "Arandas",
      "Arcelia",
      "Arizpe",
      "Arriaga",
      "Asuncion Ixtaltepec",
      "Asuncion Nochixtlan",
      "Atequiza",
      "Atizapan",
      "Atlacholoaya",
      "Atlacomulco",
      "Atlatlahucan",
      "Atlixco",
      "Atlzayanca",
      "Atotonilco el Alto",
      "Atoyac de Alvarez",
      "Autlan de Navarro",
      "Autopista Puebla Orizaba 185 (La Condusa)",
      "Axochiapan",
      "Azcapotzalco",
      "Azteca",
      "Badiraguato",
      "Bahia de Kino",
      "Baja California",
      "Balancan de Dominguez",
      "Bamoa",
      "Banderas del Aguila",
      "Banderilla",
      "Barra de Navidad",
      "Barranca de Santa Clara",
      "Barrio de Mexico",
      "Benito Juarez",
      "Benito Juarez",
      "Benito Juarez",
      "Benito Juarez (Santa Elena)",
      "Berriozabal",
      "Boca del Rio",
      "Brisas Barra de Suchiate",
      "Bucerias",
      "Cabo San Lucas",
      "Cabos",
      "Cadereyta",
      "Cadereyta de Montes",
      "Cadereyta Jimenez",
      "Cajeme",
      "Cajititlan",
      "Camargo",
      "Campeche",
      "Campestre Tarimbaro",
      "Cananea",
      "Canatlan",
      "Candelaria",
      "Cardenas",
      "Cardonal",
      "Catemaco",
      "Cazones de Herrera",
      "Celaya",
      "Centro",
      "Centro",
      "Cerritos",
      "Chalco de Diaz Covarrubias",
      "Chapala",
      "Chetumal",
      "Chiapa de Corzo",
      "Chiapas",
      "Chiautempan",
      "Chiautla",
      "Chicago",
      "Chiconcuac",
      "Chignahuapan",
      "Chihuahua",
      "Chihuahua",
      "Chihuahua",
      "Chilpancingo",
      "Cholula",
      "Ciudad Ayala",
      "Ciudad Constitucion",
      "Ciudad de Huajuapam de Leon",
      "Ciudad de Villa de Alvarez",
      "Ciudad del Carmen",
      "Ciudad Hidalgo",
      "Ciudad Lopez Mateos",
      "Ciudad Madero",
      "Ciudad Mendoza",
      "Ciudad Nezahualcoyotl",
      "Ciudad Sabinas",
      "Ciudad Sahagun",
      "Ciudad Valles",
      "Ciudad Victoria",
      "Coacalco",
      "Coahuila",
      "Coatepec",
      "Coatzacoalcos",
      "Coatzintla",
      "Cocoyoc",
      "Cocula",
      "Colima",
      "Colimas",
      "Colon",
      "Colonia",
      "Colonia Benito Juarez",
      "Colonia Cuauhtemoc",
      "Colonia de Venado",
      "Colonia Emiliano Zapata (Ejido Santiago Temoaya)",
      "Colonia Guerrero (Los Guajes)",
      "Colonia Hidalgo",
      "Colonia la Presa (Ejido de Chapultepec)",
      "Colonia Lopez Nelio (Las Palmas)",
      "Colonia Madero (Madero)",
      "Colonia Mexico",
      "Colonia Miguel Aleman Valdez",
      "Colonia Veracruz",
      "Comalcalco",
      "Compostela",
      "Corregidora",
      "Cortazar",
      "Cosamaloapan de Carpio",
      "Cosoleacaque",
      "Coyoacan",
      "Coyuca de Catalan",
      "Cuajimalpa",
      "Cuarta Brigada",
      "Cuauhtemoc",
      "Cuauhtemoc",
      "Cuauhtemoc",
      "Cuautepec",
      "Cuautepec de Hinojosa",
      "Cuautitlan",
      "Cuautla",
      "Cuautlancingo",
      "Cuernavaca",
      "Cuitlahuac",
      "Cunduacan",
      "Cutzamala de Pinzon",
      "Cuyoaco",
      "Dolores Hidalgo Cuna de la Independencia Nacional",
      "Durango",
      "Ecatepec de Morelos",
      "Ejido de Otumba (Loma Bonita)",
      "Ejido Distrito Federal",
      "Ejido Santa Maria Tianguistenco (Ejido el Rosario)",
      "El Alto Culiacan",
      "El Carmen",
      "El Colli",
      "El Fuerte de Montes Claros",
      "El Grullo",
      "El Leon",
      "El Mirador",
      "El Ocotito",
      "El Parque",
      "El Potrero",
      "El Rio",
      "El Sabinal (San Pedro)",
      "El Salto",
      "El Salto",
      "El Sauz",
      "El Tecuan",
      "El Torreon",
      "Emiliano Zapata",
      "Emiliano Zapata",
      "Empalme",
      "Ensenada",
      "Epazoyucan",
      "Erongaricuaro",
      "Escobedo",
      "Escobedo",
      "Escondida de lo Verde",
      "Escuinapa de Hidalgo",
      "Escuintla",
      "Estado de Mexico",
      "Estados Unidos",
      "Ex-Hacienda Pantitlan",
      "Ezequiel Montes",
      "Florida",
      "Fortin de las Flores",
      "Fraccionamiento Iberica Calimaya",
      "Francisco Castellanos",
      "Francisco I. Madero",
      "Fresnillo",
      "Frontera",
      "Garcia",
      "Garza Garcia",
      "General Escobedo",
      "General Teran",
      "Gomez Palacio",
      "Graciano Sanchez",
      "Granjas",
      "Guadalajara",
      "Guadalajara",
      "Guadalupe",
      "Guadalupe",
      "Guadalupe",
      "Guadalupe",
      "Guadalupe Victoria",
      "Guadalupito",
      "Guamuchil",
      "Guanajuato",
      "Guasave",
      "Guaymas",
      "Gueramaro",
      "Gustavo A. Madero Borough",
      "Gutierrez Zamora",
      "Hermosillo",
      "Heroica Alvarado",
      "Heroica Caborca",
      "Heroica Coscomatepec de Bravo",
      "Heroica Matamoros",
      "Heroica Zitacuaro",
      "Huandacareo",
      "Huanimaro",
      "Huatabampo",
      "Huauchinango",
      "Huehuetoca",
      "Huejotzingo",
      "Huejucar",
      "Huichapan",
      "Huimanguillo",
      "Huimilpan",
      "Huixquilucan",
      "Huixtla",
      "Hunucma",
      "Iglesia Vieja",
      "Ignacio Allende",
      "Iguala de la Independencia",
      "Insurgentes",
      "Irapuato",
      "Isla Holbox",
      "Isla Mujeres",
      "Ixmiquilpan",
      "Ixtapa",
      "Ixtapa",
      "Ixtapa-Zihuatanejo",
      "Ixtapaluca",
      "Ixtapan de la Sal",
      "Ixtlahuaca de Villada",
      "Ixtlahuacan del Rio",
      "Ixtlan del Rio",
      "Izamal",
      "Iztacalco",
      "Iztapalapa",
      "Izucar de Matamoros",
      "Jacobo",
      "Jacona de Plancarte",
      "Jala",
      "Jalapa",
      "Jalisco",
      "Jalostotitlan",
      "Jalpa",
      "Jaltipan de Morelos",
      "Jalupa",
      "Jaumave",
      "Jerez de Garcia Salinas",
      "Jesus Carranza",
      "Jesus del Monte",
      "Jesus Maria",
      "Jesus Maria",
      "Jilotepec",
      "Jimenez",
      "Jimenez",
      "Jiquilpan de Juarez",
      "Jiquipilco",
      "Jiutepec",
      "Jocotepec",
      "Jocotitlan",
      "Jojutla",
      "Jonacatepec de Leandro Valle",
      "Jose Cardel",
      "Juan",
      "Juarez",
      "Juarez",
      "Juarez",
      "Juarez",
      "Kanasin",
      "Kilometro 32 Texcoco Lecheria",
      "La Barca",
      "La Canada",
      "La Ciudad",
      "La Cruz",
      "La Florida",
      "La Habana",
      "La Herradura",
      "La Isla",
      "La Joya",
      "La Moncada",
      "La Paletena",
      "La Paz",
      "La Piedad",
      "La Pista de Tizayuca",
      "La Reforma",
      "La Tapachula",
      "La Union",
      "La Victoria",
      "Lagos de Moreno",
      "Laredo",
      "Las Americas",
      "Las Cabanas (Colinas de los Angeles)",
      "Las Canoras (Altiva)",
      "Las Choapas",
      "Las Delicias",
      "Las Delicias",
      "Leon",
      "Lerdo",
      "Lerma",
      "Leyva Solano",
      "Libramiento Leon-Salamanca",
      "Libres",
      "Linares",
      "Loma de los Cavazos (Maria de la Luz)",
      "Loreto",
      "Loreto",
      "Los Garzas",
      "Los Mochis",
      "Los Reyes",
      "Los Reyes",
      "Los Reyes de Salgado",
      "Los Sabinos",
      "Luvianos",
      "Macuspana",
      "Madero",
      "Magdalena de Kino",
      "Magdalena Petlacalco",
      "Magiscatzin",
      "Malinalco",
      "Manuel Avila Camacho",
      "Manzanillo",
      "Mariano Matamoros",
      "Marquelia",
      "Martinez de la Torre",
      "Mazatecochco",
      "Mazatepec",
      "Mazatlan",
      "Medellin de Bravo",
      "Melchor",
      "Melchor Muzquiz",
      "Mendoza",
      "Mexicali",
      "Mexico City",
      "Mextepec",
      "Mier",
      "Miguel Aleman",
      "Miguel Hidalgo",
      "Mina Mexico",
      "Mineral",
      "Mineral de la Reforma",
      "Mineral del Chico",
      "Mineral del Monte",
      "Mixquiahuala de Juarez",
      "Moctezuma",
      "Monclova",
      "Monclova",
      "Monte Leon",
      "Montemorelos",
      "Monterrey",
      "Monterrey",
      "Morelia",
      "Morelos",
      "Morelos",
      "Morelos",
      "Moroleon",
      "Motozintla de Mendoza",
      "Muna",
      "Nacozari Viejo",
      "Naucalpan",
      "Navojoa",
      "Navolato",
      "Netzahualcoyotl",
      "Nextlalpan",
      "Nicolas Romero",
      "Nogales",
      "Noxtepec de Zaragoza (El Aguacate)",
      "Nueva Italia de Ruiz",
      "Nuevo Casas Grandes",
      "Nuevo Coahuila",
      "Nuevo Ideal",
      "Nuevo Laredo",
      "Nuevo Leon",
      "Oaxaca",
      "Oaxtepec",
      "Ocotlan",
      "Ocoyoacac",
      "Ocozocoautla de Espinosa",
      "Ojinaga",
      "Ojo de Agua",
      "Ojuelos de Jalisco",
      "Orizaba",
      "Oxkutzkab",
      "Pabellon",
      "Pabellon de Arteaga",
      "Pachuca",
      "Pachuca de Soto",
      "Panotla",
      "Pantanal",
      "Paraiso",
      "Paraje Nuevo",
      "Parral",
      "Paseos de Tecamac",
      "Paso Real",
      "Pastor Ortiz",
      "Patzcuaro",
      "Pedregal de Jerico",
      "Pedro Escobedo",
      "Pedro Meoqui",
      "Pericos",
      "Perote",
      "Pesqueria",
      "Petaquillas",
      "Petatlan",
      "Pichucalco",
      "Piedras Negras",
      "Piedras Negras",
      "Playa del Carmen",
      "Polanco",
      "Poncitlan",
      "Poza Rica Chacas",
      "Poza Rica de Hidalgo",
      "Primero de Mayo",
      "Progreso",
      "Prolongacion Avenida Mexico Norte",
      "Puebla",
      "Pueblo Hidalgo",
      "Pueblo Juarez (La Magdalena)",
      "Pueblo Viejo",
      "Pueblo Yaqui",
      "Puente de Ixtla",
      "Puente Grande",
      "Puerto Escondido",
      "Puerto Mexico",
      "Puerto Morelos",
      "Puerto Vallarta",
      "Purisima de Bustos",
      "Purisima del Zapote",
      "Puruandiro",
      "Queseria",
      "Quintana Roo",
      "Quintana Roo",
      "Quiroga",
      "Ramos Arizpe",
      "Rancho Xalnene",
      "Rayon",
      "Rayon",
      "Reforma (Madrigal 2da. Seccion)",
      "Refractarios Guadalajara",
      "Reyes de Vallarta",
      "Reynosa",
      "Rincon de Tamayo",
      "Rio Blanco",
      "Rio Bravo",
      "Roma",
      "Rosarito",
      "Sahuayo de Morelos",
      "Salamanca",
      "Salina Cruz",
      "Salinas de Hidalgo",
      "Saltillo",
      "Salvatierra",
      "San Agustin",
      "San Agustin (Salvador Alvarado)",
      "San Agustin Altamirano",
      "San Agustin Tlaxiaca",
      "San Andres Cholula",
      "San Andres Tuxtla",
      "San Angel Inn",
      "San Antonio",
      "San Antonio la Isla",
      "San Antonio Virreyes",
      "San Bernardo",
      "San Cristobal",
      "San Cristobal",
      "San Felipe",
      "San Felipe Torres Mochas [Ganaderia]",
      "San Fernando",
      "San Fernando",
      "San Francisco",
      "San Francisco",
      "San Francisco Javier",
      "San Gabriel",
      "San Jeronimo de Juarez",
      "San Jose del Valle",
      "San Jose Iturbide",
      "San Juan",
      "San Juan",
      "San Juan Bautista Tuxtla",
      "San Juan de Aragon",
      "San Juan del Rio",
      "San Luis",
      "San Luis",
      "San Luis de la Paz",
      "San Luis Soyatlan",
      "San Martin de Camargo",
      "San Martin Duraznos",
      "San Martin Hidalgo",
      "San Martin Notario",
      "San Martin Texmelucan de Labastida",
      "San Mateo",
      "San Mateo Atenco",
      "San Mateo Mexicaltzingo",
      "San Miguel",
      "San Miguel",
      "San Miguel Balderas",
      "San Miguel de Allende",
      "San Miguel de Atotonilco",
      "San Miguel de Cozumel",
      "San Miguel de Papasquiaro",
      "San Miguel el Alto",
      "San Miguel el Alto (El Puerto)",
      "San Miguel Zinacantepec",
      "San Nicolas",
      "San Nicolas",
      "San Nicolas",
      "San Nicolas Totolapan",
      "San Pablo Hidalgo",
      "San Patricio",
      "San Pedro",
      "San Pedro",
      "San Pedro",
      "San Pedro Cholula",
      "San Pedro de Las Colonias",
      "San Pedro de Nolasco",
      "San Pedro Piedra Gorda",
      "San Pedro Pochutla",
      "San Rafael",
      "San Salvador Atenco",
      "San Salvador Huixcolotla",
      "San Salvador Tzompantepec",
      "San Sebastian el Grande",
      "San Sebastian Tutla",
      "San Sebastian Xhala",
      "San Simon de Guerrero",
      "San Vicente",
      "San Vicente Chicoloapan",
      "Santa Anita",
      "Santa Apolonia",
      "Santa Catalina",
      "Santa Catarina",
      "Santa Catarina Juquila",
      "Santa Fe",
      "Santa Isabel Tlanepantla",
      "Santa Lucia",
      "Santa Maria Chimalhuacan",
      "Santiago",
      "Santiago de Queretaro",
      "Santiago Ixcuintla",
      "Santiago Tianguistenco",
      "Satelite",
      "Seccion Primera Santiago Tetla",
      "Selene",
      "Sierra Madre",
      "Silao",
      "Sinaloa de Leyva",
      "Sombrerete",
      "Sonora",
      "Soto la Marina",
      "Suchiapa",
      "Tabasco",
      "Tablon Grande (Bombas de Apaxco)",
      "Tacambaro de Codallos",
      "Tacotalpa",
      "Tala",
      "Tamaulipas",
      "Tamazula de Gordiano",
      "Tampico",
      "Tampico Alto",
      "Tangancicuaro de Arista",
      "Tapachula",
      "Tapalpa",
      "Taxco",
      "Teapa",
      "Tecalitlan",
      "Tecamachalco",
      "Tecate",
      "Tecax",
      "Tecoman",
      "Tecuala",
      "Tejupilco de Hidalgo",
      "Tekoh",
      "Teloloapan",
      "Temascalcingo",
      "Temascaltepec de Gonzalez",
      "Temixco",
      "Tenamaxtlan",
      "Tenancingo de Degollado",
      "Tenosique de Pino Suarez",
      "Teoloyucan",
      "Teotihuacan de Arista",
      "Tepalcatepec",
      "Tepeaca",
      "Tepeapulco",
      "Tepeji de Ocampo",
      "Tepetlacolco",
      "Tepetlapa",
      "Tepic",
      "Tepotzotlan",
      "Tepoztlan",
      "Tequila",
      "Tequisistlan",
      "Tequisquiapan",
      "Tequixquiac",
      "Texcoco",
      "Tezonapa",
      "Tezontepec",
      "Tezontepec de Aldama",
      "Tezoyuca",
      "Tezoyuca",
      "Tierra Blanca",
      "Tierra Colorada",
      "Tijuana",
      "Tilzapotla",
      "Tirindaro",
      "Tizapan el Alto",
      "Tlacolula de Matamoros",
      "Tlacotalpan",
      "Tlahuac",
      "Tlahuelilpan",
      "Tlajomulco de Zuniga",
      "Tlalmanalco de Velazquez",
      "Tlalnepantla",
      "Tlalnepantla",
      "Tlalpan",
      "Tlaltizapan",
      "Tlanalapa",
      "Tlapa de Comonfort",
      "Tlapacoyan",
      "Tlaquepaque",
      "Tlaquiltenango",
      "Tlatlauquitepec",
      "Tlatlaya",
      "Tlaxcala",
      "Tlaxcalancingo",
      "Tocatlan",
      "Tocumbo",
      "Todos Santos",
      "Tolcayuca",
      "Toluca",
      "Tonala",
      "Tonala",
      "Tonatico",
      "Topolobampo",
      "Tula de Allende",
      "Tulancingo",
      "Tultepec",
      "Tultitlan",
      "Tulum",
      "Tuxpan",
      "Tuxpan",
      "Tuxpan de Rodriguez Cano",
      "Tuxtla",
      "Uman",
      "Union de Tula",
      "Ures",
      "Uriangato",
      "Ursulo Galvan",
      "Uruapan",
      "Valladolid",
      "Valle de Bravo",
      "Valle de Santiago",
      "Valle Hermoso",
      "Valles",
      "Venustiano Carranza",
      "Venustiano Carranza",
      "Veracruz",
      "Vicente Guerrero",
      "Vicente Guerrero",
      "Victoria",
      "Victoria",
      "Villa Cuauhtemoc Otzolotepec",
      "Villa de Almoloya de Juarez",
      "Villa de Costa Rica",
      "Villa Garcia",
      "Villa Hidalgo",
      "Villa Nanchital",
      "Villadiego",
      "Villagran",
      "Villahermosa",
      "Visitacion",
      "Vistahermosa de Negrete",
      "Xalapa",
      "Xalisco",
      "Xochimilco",
      "Xochimilco",
      "Xochitepec",
      "Xonacatlan",
      "Yanga",
      "Yautepec",
      "Yecapixtla",
      "Yucatan",
      "Yurecuaro",
      "Yuriria",
      "Zacapoaxtla",
      "Zacapu",
      "Zacatecas",
      "Zacatelco",
      "Zacatepec",
      "Zacatlan",
      "Zacualpan",
      "Zacualpan",
      "Zacualtipan",
      "Zamora",
      "Zapopan",
      "Zapotitlan de Vadillo",
      "Zapotlan de Juarez",
      "Zapotlanejo",
      "Zapotlanejo",
      "Zaragoza",
      "Zinapecuaro",
      "Zitlala",
      "Zongolica",
      "Zumpango"
    ];
    return cities[Math.floor(Math.random() * cities.length)];
  }
}