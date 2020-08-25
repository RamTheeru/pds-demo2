import { Injectable } from '@angular/core';
import swal   from 'sweetalert2';


@Injectable()
export class SweetService {

  constructor() { }

  showSuccessMessage(title,text=''){
    swal(title,text,'success');
  }
    showMessage(title,text=''){
    swal(title,text);

  }

  showWarning(text){
    
   swal({
      title: "Are you sure?",
      text: text,
      type: 'warning',
      showConfirmButton: true,
      showCancelButton: true     
    })
    .then((willDelete) => {

        if(willDelete.value){
             swal("Success");
        }else{
          swal("Fail");
        }

      console.log(willDelete)
    });

  }

}