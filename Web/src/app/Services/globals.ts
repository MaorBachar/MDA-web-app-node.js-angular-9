
'use strict';


/*
Working with Desktop and Mobile, There are 2 ways to know if we are in desktop.
1. isDesktop=  !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
2. isDesktop =  window.screen.width>1024 ;
If true then we are on desktop.

If we want to separate to Desktop , Tablet and mobile we do
1. Desktop =>  isDesktop == true == window.screen.width>1024 
2. Tablet =>   isDesktop == false 
3. Mobile => isMobile == true == window.screen.width<= 450;

(1024 is the size of the larger ipad)
*/

import { Injectable } from '@angular/core';

export const version: string = "1.0.0";

export const isDesktop: boolean= window.screen.width>1030;
export const isTablet: boolean= window.screen.width <= 1030 && window.screen.width > 550;
export const isMobile: boolean= window.screen.width <= 550;


@Injectable()
export class GlobalsService {
}
