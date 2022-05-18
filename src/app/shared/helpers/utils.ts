

export class Utils {

  public static sortByProperty(array:any,property:any, inverse = false ){
    const arraySortered = array.sort((a:any, b:any) => {
        if (a[property] > b[property]) {
            return 1;
        }
        if (a[property] < b[property]) {
            return -1;
        }

        return 0;
    });

    if(inverse) {
        return arraySortered.reverse();
    }
    return arraySortered;
  }

  public static getIdFromUrl(url: string) {
    const splitUrl = url.split('/');
    return splitUrl[splitUrl.length-2];
   }

}
