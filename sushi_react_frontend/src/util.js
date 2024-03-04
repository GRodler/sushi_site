import california from './images/california.png'
import dragon from './images/dragon.png'
import dynamite from './images/dynamite.png'
import philadelphia from './images/philadelphia.png'
import shrimp from './images/shrimp.png'
import rainbow from './images/rainbow.png'

export function GetImmagine(immagine){
   switch (immagine){
       case 'california':
            return california
       case 'dragon':
           return dragon
       case 'dynamite':
           return dynamite
       case 'philadelphia':
           return philadelphia
       case 'shrimp':
           return shrimp
       case 'rainbow':
           return rainbow
   }
}