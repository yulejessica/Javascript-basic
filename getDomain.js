function getDomain(url) {
  var result = '';
  var splittedURL = url.split('//')
  var domainedString = splittedURL[1];
  var domainedStrSplitted = domainedString.split('.');
  
    if(domainedStrSplitted[0] === 'www'){
      result += domainedStrSplitted[1];
    } else {
      result += domainedStrSplitted[0];
    }
  
  return result;
}


input1 = "http://github.com/carbonfive/raygun" 
console.log(getDomain(input1))//Output1: "github"

input2 = "http://www.zombie-bites.com" 
console.log(getDomain(input2))//Output2: "zombie-bites"

input3 = "https://www.cnet.com" 
console.log(getDomain(input3))//Output3: "cnet"


input4 = "https://www.facebook.com" 
console.log(getDomain(input4))//Output3: "facebook"