// task 11
export interface MajorCredits {
    _majorCreditBrand: void;
    credits: number;
  }
  
  export interface MinorCredits {
    _minorCreditBrand: void;
    credits: number;
  }
  
  export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      _majorCreditBrand: undefined 
    } as MajorCredits;
  }
  
  export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      _minorCreditBrand: undefined
    } as MinorCredits;
  }
  