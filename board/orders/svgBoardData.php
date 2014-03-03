<?php
/*
    Copyright (C) 2004-2010 Kestas J. Kuliukas

	This file is part of webDiplomacy.

    webDiplomacy is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    webDiplomacy is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with webDiplomacy.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Generates the JSON data used to generate orders for a certain game, used by OrderInterface.
 *
 */
class svgBoardData {
	public static function getBoardData($gameID) {
		global $DB, $Game;

		$orders=array();
		$tabl=$DB->sql_tabl(
			"SELECT turn,terrID l,countryID c,LEFT(unitType,1) u,2-success s,2-dislodged d,type-1 o,toTerrID t,fromTerrID f " .
			"FROM wD_MovesArchive WHERE gameID=$gameID ORDER BY turn,type"
		);
		while($order=$DB->tabl_hash($tabl)) {
			$turn = $order['turn'];
			unset($order['turn']);
			array_walk($order, $func = create_function('&$v,$k', '$k == "u" ? ($v = $v === null ? 0 : $v) : $v = (int) $v;'));
			$orders[$turn][] = $order;
		}

		$statusArchive=array();
		$tabl=$DB->sql_tabl("SELECT terrID l,turn,standoff-1 s,countryID c FROM wD_TerrStatusArchive WHERE gameID=$gameID ORDER BY turn");
		while($status=$DB->tabl_hash($tabl)) {
			$turn = $status['turn'];
			unset($status['turn']);
			array_walk($status, $func);
			$statusArchive[$turn][] = $status;
		}

		$terrStatus=array();
		$tabl=$DB->sql_tabl("SELECT s.terrID l,u.terrID L,LEFT(type,1) u,occupiedFromTerrID o,standoff-1 s,s.countryID c, u.countryID U FROM wD_TerrStatus s LEFT JOIN wD_Units u ON (occupyingUnitID=u.id) WHERE s.gameID=$gameID");
		while($status=$DB->tabl_hash($tabl)) {
			array_walk($status, $func);
			$terrStatus[] = $status;
		}

		$data = array('o' => $orders, 'a' => $statusArchive, 's' => $terrStatus, 't' => (int) $Game->turn, 'p' => substr($Game->phase, 0, 1));
		return "function loadBoardData() {\nreturn JSON.parse('".json_encode($data)."');\n}\n";
	}
}
?>