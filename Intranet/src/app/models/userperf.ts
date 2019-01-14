import { isBoolean } from "util";

/**
 * New typescript file
 */
export interface UserPerf {
    id: number;    
	anno: number ;
	inizio_incarico: Date;
	fine_incarico: Date;
	giorni_lavorati: number;
	cp: Boolean;
	responsabilita_speciali: string;
	nome: string;
	cognome: string;
    do: string;
    note_Informative_1: string;
	note_Informative_2: string;
	percentuale_comando_effettivo: number;
	percentuale_do: number;
	presenza_giuridicav: number;
	capitolo_standard: string;
	capitolo_oneri_standard: string;
	capitolo_irap_standard: string;
	fk_scheda: number;

}