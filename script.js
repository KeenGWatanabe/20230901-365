// >-1 means any character after accepted, "i " must be only I in a sentence
function myFunction() {
	var inputText = document.getElementById("text_a").value.trim();

	if(inputText === "") {
	document.getElementById("answer").innerHTML="Your input is blank";      
		} 
	else if(inputText.toLowerCase().indexOf("thank you")>-1){
		document.getElementById("answer").innerHTML="You are welcome.不用客气。";
		}
	else if(inputText.toLowerCase().indexOf("bullshit")>-1){
		document.getElementById("answer").innerHTML="as long as people exists, bullshit everywhere";
		} 
	else if(inputText.toLowerCase().indexOf("people need")>-1){
			document.getElementById("answer").innerHTML='Generally, peace gives people the best life.  Without it, people cant seems to find time to focus really well.  People who have peace, live for themselves, some create, some self-improve, some help others...<br><a href="https://sinkapoor.blogspot.com/p/authentic-life-article.html" target="_blank">authentic life characters</a>';
		}
	else if(inputText.toLowerCase().indexOf("god")>-1){
		document.getElementById("answer").innerHTML='<a href="https://www.theguardian.com/education/2004/mar/08/highereducation.uk1#:~:text=A%20scientist%20has%20calculated%20thatexistence%20of%20an%20omnipotent%20being."  target="_blank">A scientist has calculated that there is a 67% chance that God exists</a>'; 
		}
	else if(inputText.toLowerCase().indexOf("the developer")>-1){
		document.getElementById("answer").innerHTML='my software design philosopy, it always works!<br><a href="http://web.mckeen.sg" target="_blank">developer</a>'; 
		}
	else if(inputText.toLowerCase().indexOf("weather")>-1){
		document.getElementById("answer").innerHTML='<a href="http://www.weather.gov.sg/lightning/lightning/lightningalertinformationsystem.jsp"  target="_blank">click for SG weather</a><br><a href="https://map.worldweatheronline.com/" target="_blank">click for satelite world weather</a>'; 
		}

	else if(inputText.toLowerCase().indexOf("account")>-1||inputText.toLowerCase().indexOf("tax")>-1){
		document.getElementById("answer").innerHTML='Am also a CPA accountant providing accounting services, Bookkeeping, GST and Tax filing services.  <br><a href="https://www.mckeen.sg/2010/11/home.html"  target="_blank">mckeen accounting</a>';	
		}
	else if(inputText.toLowerCase().indexOf("web")>-1||inputText.toLowerCase().indexOf("development")>-1){
			document.getElementById("answer").innerHTML='<a href="https://www.mckeen.sg/2022/10/webpagedevelopment1000.html" target="_blank">web services</a><br><a href="http://web.mckeen.sg" target="_blank">developer</a>';
		}
	else if(inputText.toLowerCase().indexOf("staff")>-1){
			document.getElementById("answer").innerHTML='Our unique, staff managing app allows you to manage your staff work tasks on-the-go.  Think like how emails, messaging replace the secretary, web app can replace having to supervise staffs on tasks completion. <br><a href="https://www.mckeen.sg/2023/06/staff-management.html" target="_blank">staff management</a>';
		}
	else if(inputText.toLowerCase().indexOf("financial")>-1||inputText.toLowerCase().indexOf("consult")>-1){
			document.getElementById("answer").innerHTML='CPA Consultants will provide you with an overview, analysis and suggestions. Subsequently, clients can request for an Annual Financial Consultation. This provides a comprehensive yearly analysis to ensure that everything is going in the right direction for you for the current year. It will also incorporate current year recommendations for adjustments or changes.<br><a href="https://www.mckeen.sg/2022/10/financialconsultation188individual.html" target="_blank">financial consultation</a>';
		}	
	else if(inputText.toLowerCase().indexOf("couple")>-1||inputText.toLowerCase().indexOf("family")>-1){
			document.getElementById("answer").innerHTML='Similar to individual consultation, couple financial health management makes sense, as its easier to achieve family goals when all financial commitments are in sync between couples.For the Financial consultation, client will provide the principal consultant the financial data from a checklist before the meeting. We will ensure confidentiality of the client and will not disclose client’s financial information to another party apart from the Principal Consultant. There will be an analysis of client’s financial data, construction of Financial Health report, recommendations of enhancements and changes to take place, etc.<br><a href="https://www.mckeen.sg/2022/10/financialconsultation368.html" target="_blank">couple consultation</a>';
		}
	else if(inputText.toLowerCase().indexOf("property")>-1||inputText.toLowerCase().indexOf("estate")>-1){
			document.getElementById("answer").innerHTML='Property transactions consultation provides you a financial budget review and analysis as well as current financial standing versus invested-in decisions. You will understand your financial standing better, in this way, you will be able to make forward planning and make informed decisions that will benefit your decision.<br><a href="https://www.mckeen.sg/2022/11/property-transaction-consultation.html" target="_blank">property consultation</a><br>';
		}
	else if(inputText.toLowerCase().indexOf("analysis")>-1){
			document.getElementById("answer").innerHTML='Customized financial analysis on spreadsheets.<br><a href="https://www.mckeen.sg/2008/12/bank-register-cheque-writer.html" target="_blank">we do analysis</a>';
		}	
	else if(inputText.toLowerCase().indexOf("excel")>-1||inputText.toLowerCase().indexOf("sheet")>-1){
			document.getElementById("answer").innerHTML='Customized financial analysis on spreadsheets.<br><a href="https://www.mckeen.sg/2022/08/excel-design-applications.html" target="_blank">spreadsheet design</a>';
		}
	else if(inputText.toLowerCase().indexOf("customise")>-1||inputText.toLowerCase().indexOf("customize")>-1){
			document.getElementById("answer").innerHTML='Customized financial analysis on spreadsheets.<br><a href="https://www.mckeen.sg/2009/11/customization-of-any-reports.html" target="_blank">customise excel</a>';
		}	
	else if(inputText.toLowerCase().indexOf("corporate")>-1||inputText.toLowerCase().indexOf("secretar")>-1){
			document.getElementById("answer").innerHTML='<a href="https://www.mckeen.sg/2022/09/corporate-secretary.html" target="_blank">corporate secretary</a>';	
		}
	else if(inputText.toLowerCase().indexOf("outsource")>-1||inputText.toLowerCase().indexOf("freelance")>-1){
			document.getElementById("answer").innerHTML='Qualified accountant at the fraction of the full-time accountant, paying for a specialised function as you need.<br><a href="https://www.mckeen.sg/2010/07/outsource-accounting-to-many-small.html" target="_blank">outsource consultancy</a><br><a href="https://www.mckeen.sg/2009/05/specialisaton-in.html" target="_blank">accountant</a><br><a href="https://www.mckeen.sg/2023/05/job-listing.html" target="_blank">upload a CV</a>';
		}		
	
	else if(inputText.toLowerCase().indexOf("service")>-1){
			document.getElementById("answer").innerHTML='Singapore property market brief<br>financial consultation<br>projects sales<br>project research<br>resale marketing<br><a href="https://realty365homes.com" target="_blank">agent site</a><br><a href="http://realty365.mckeen.sg" target="_blank">agent blog</a>';
		}
	else if(inputText.toLowerCase().indexOf("appointment")>-1||inputText.toLowerCase().indexOf("discuss")>-1||inputText.toLowerCase().indexOf("meet")>-1){
			document.getElementById("answer").innerHTML='Would you like to book an appointment? <a href="https://koalendar.com/e/meet-with-realty365" target="_blank">book an appointment</a>';
		}
	else if(inputText.toLowerCase().indexOf("recruit")>-1||inputText.toLowerCase().indexOf("employ")>-1){
			document.getElementById("answer").innerHTML='We are constantly on the lookout for suitable candidates with like-minded in tech and numbers pursuits.<br><a href="https://www.mckeen.sg/2023/05/job-listing.html" target="_blank">upload a CV</a>';
		}
	else if(inputText.toLowerCase().indexOf("hle")>-1||inputText.toLowerCase().indexOf("loan eligibility")>-1){
			document.getElementById("answer").innerHTML='HFE letter streamlines eligibility checks for flat purchase, housing grants and HDB housing loans into one single application.From 9 May 2023, HDB will introduce a new HDB Flat Eligibility (HFE) letter to provide flat buyers with a holistic understanding and assessment of their housing and financing options before they commence their home buying journey. <br><a href="https://www.hdb.gov.sg/cs/infoweb/about-us/news-and-publications/press-releases/28042023-New-HDB-Flat-Eligibility-Letter" target="_blank">HDB Eligibility</a><br>Private property loans are subject to individual banking arrangements, comparisons is not useful, because of banking relationships between banks to individual clients.  Alternative financing from stocks, assets liquidations calculations, best seek fiancial consultation with a customized financial calculator.<br><a href="https://www.mckeen.sg/2022/11/property-transaction-consultation.html" target="_blank">property fiancial analysis</a>';
		}
//template codes		
	else if(inputText.toLowerCase().indexOf("x")>-1){
		document.getElementById("answer").innerHTML="";
			}	
	else if(inputText.toLowerCase().indexOf("xx")>-1){
		document.getElementById("answer").innerHTML='<a href="" target="_blank">mt</a>';
			}	
	else if(inputText.toLowerCase().indexOf("xxx")>-1){
			document.getElementById("answer").innerHTML='<a href="" target="_blank">link1</a><br><a href="" target="_blank">link2</a><br>'; 	
	
	} else {
	document.getElementById("answer").innerHTML='Not in our database yet, or out-of-scope for realty365<br><a href="mailto:realty365sg@gmail.com?cc=web@mckeen.sg&subject=ChatBot%20Enquiry&body=Thank%20you%20for%20your%20email%20to%20Realty365" target="_blank">email us your enquiry</a>';      
	}

	
}