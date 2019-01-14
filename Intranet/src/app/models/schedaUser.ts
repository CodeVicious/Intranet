import { isBoolean } from "util";

/**
 * New typescript file
 */
export interface SchedaUser {
	id: number;
	descrizione_obiettivo_1: string;
	descrizione_obiettivo_2: string;
	descrizione_obiettivo_3: string;
	indicatore_desc_1: string;
	indicatore_desc_2: string;
	indicatore_desc_3: string;
	peso_1: number;
	peso_2: number;
	peso_3: number;
	raggiungimento_1: number;
	raggiungimento_2: number;
	raggiungimento_3: number;
	comp_1: number;
	comp_2: number;
	comp_3: number;
	comp_4: number;
	relaz_1: number;
	relaz_2: number;
	relaz_3: number;
	relaz_4: number;
	del_saper_1: number;
	del_saper_2: number;
	del_saper_3: number;
	del_saper_4: number;
}