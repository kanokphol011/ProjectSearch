        if(!Title === false && !Lauth == false && !Nauth === false && !Keyword == false && !Exclude == false && !DateOne == false && !Datetwo == false && checkBox.checked === true ){
          url = 'https://api.elsevier.com/content/search/scopus?query=title('+Title+')%20and%20authlast('+Lauth+')%20and%20authfirst('+Nauth+')%20and%authkeywords('+Keyword+')%20and%EXACTSRCTITLE('+Exclude+')%20and%coverDate('+DateOne+')%20and%coverDate('+Datetwo+')%20AFFIL(College%20of%20Computing)'+ApiKey;         
        console.log(1)
        } 
        if(!Title === false && !Lauth == true && !Nauth === false && !Keyword == false && !Exclude == false && !DateOne == false && !Datetwo == false && checkBox.checked === true ){
            url = 'https://api.elsevier.com/content/search/scopus?query=title('+Title+')%20and%20authfirst('+Nauth+')%20and%authkeywords('+Keyword+')%20and%EXACTSRCTITLE('+Exclude+')%20and%coverDate('+DateOne+')%20and%coverDate('+Datetwo+')%20AFFIL(College%20of%20Computing)'+ApiKey;         
          console.log(2)
        }
        if(!Title === false && !Lauth == false && !Nauth === true && !Keyword == false && !Exclude == false && !DateOne == false && !Datetwo == false && checkBox.checked === true ){
            url = 'https://api.elsevier.com/content/search/scopus?query=title('+Title+')%20and%20authlast('+Lauth+')%20and%authkeywords('+Keyword+')%20and%EXACTSRCTITLE('+Exclude+')%20and%coverDate('+DateOne+')%20and%coverDate('+Datetwo+')%20AFFIL(College%20of%20Computing)'+ApiKey;         
          console.log(3)
        } 
        if(!Title === false && !Lauth == false && !Nauth === false && !Keyword == true && !Exclude == false && !DateOne == false && !Datetwo == false && checkBox.checked === true ){
            url = 'https://api.elsevier.com/content/search/scopus?query=title('+Title+')%20and%20authlast('+Lauth+')%20and%20authfirst('+Nauth+')%20and%EXACTSRCTITLE('+Exclude+')%20and%coverDate('+DateOne+')%20and%coverDate('+Datetwo+')%20AFFIL(College%20of%20Computing)'+ApiKey;         
          console.log(4)
        } 
        if(!Title === false && !Lauth == false && !Nauth === false && !Keyword == false && !Exclude == true && !DateOne == false && !Datetwo == false && checkBox.checked === true ){
            url = 'https://api.elsevier.com/content/search/scopus?query=title('+Title+')%20and%20authlast('+Lauth+')%20and%20authfirst('+Nauth+')%20and%EXACTSRCTITLE('+Exclude+')%20and%coverDate('+DateOne+')%20and%coverDate('+Datetwo+')%20AFFIL(College%20of%20Computing)'+ApiKey;         
          console.log(5)
        }
        if(!Title === false && !Lauth == false && !Nauth === false && !Keyword == false && !Exclude == false && !DateOne == true && !Datetwo == true && checkBox.checked === true ){
            url = 'https://api.elsevier.com/content/search/scopus?query=title('+Title+')%20and%20authlast('+Lauth+')%20and%20authfirst('+Nauth+')%20and%authkeywords('+Keyword+')%20and%EXACTSRCTITLE('+Exclude+')%20AFFIL(College%20of%20Computing)'+ApiKey;         
          console.log(6)
        }   
        if(!Title === false && !Lauth == false && !Nauth === false && !Keyword == false && !Exclude == false && !DateOne == false && !Datetwo == false && checkBox.checked === false ){
            url = 'https://api.elsevier.com/content/search/scopus?query=title('+Title+')%20and%20authlast('+Lauth+')%20and%20authfirst('+Nauth+')%20and%authkeywords('+Keyword+')%20and%EXACTSRCTITLE('+Exclude+')%20and%coverDate('+DateOne+')%20and%coverDate('+Datetwo+')'+ApiKey;         
          console.log(7)
        }
        if(!Title === false && !Lauth == false && !Nauth === true && !Keyword == true && !Exclude == true && !DateOne == true && !Datetwo == true && checkBox.checked === true ){
            url = 'https://api.elsevier.com/content/search/scopus?query=title('+Title+')%20and%20authlast('+Lauth+')%20and%20authfirst('+Nauth+')%20and%authkeywords('+Keyword+')%20and%EXACTSRCTITLE('+Exclude+')%20and%coverDate('+DateOne+')%20and%coverDate('+Datetwo+')%20AFFIL(College%20of%20Computing)'+ApiKey;         
          console.log(8)
        }
      
