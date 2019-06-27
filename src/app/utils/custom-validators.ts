import { AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';

export class CustomValidators {
    static dateShouldBePassed(control: AbstractControl): ValidationErrors {
        
        if(Date.parse(control.value) < Date.now()){
            return null;
        }
        return { dateShouldBePassed: true }
    }

    static atLeastOneShouldBeSelected(group: FormGroup) {

        if(Object.values(group.value).includes(true) ){
            return;
        }
        return {atLeastOneShouldBeSelected: true}
    }
}
