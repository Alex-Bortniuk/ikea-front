"use strict";

import generateHeader from "./generateHeader.js";
import {catalogMenu} from "./catalogMenu.js";
import generateFooter from "./generateFooter.js";
import {catalog} from "./generateCatalog.js";
import {subcatalog} from "./subcatalog.js";
import {loadData} from "./loadData.js";


generateHeader();
generateFooter();
catalog();
subcatalog();
catalogMenu();
loadData();