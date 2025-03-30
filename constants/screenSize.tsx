export const SMALL_DEVİCE = 400;
export const isSmallDevice = (screenWidth: number):boolean =>{
   return screenWidth < SMALL_DEVİCE ? true : false;
}