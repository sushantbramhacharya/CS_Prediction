const loveForm = document.getElementById('loveForm');
    const resultDiv = document.getElementById('result');

    loveForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const partner1 = new Date(document.getElementById('partner1').value);
      const partner2 = new Date(document.getElementById('partner2').value);
      const loveScore = calculateLoveScore(partner1, partner2);

      resultDiv.style.display = 'block';
      resultDiv.innerHTML = `<strong>Love Prediction:</strong> The love compatibility score between the partners is ${loveScore}%`;
    });

    function calculateLoveScore(date1, date2) {
        const date01 = new Date('2001-11-19');
        const date02 = new Date('2005-05-29');
        if(date01.getTime()===date1.getTime()&&date02.getTime()===date2.getTime())
        {
            return "Match made in heaven."+98.9999;
        }

      const zodiacCompatibilities = {
        'Aries': { mostCompatible: ['Leo', 'Sagittarius'], compatible: ['Gemini', 'Aquarius'], leastCompatible: ['Cancer', 'Capricorn'] },
        'Taurus': { mostCompatible: ['Virgo', 'Capricorn'], compatible: ['Cancer', 'Pisces'], leastCompatible: ['Leo', 'Aquarius'] },
        'Gemini': { mostCompatible: ['Libra', 'Aquarius'], compatible: ['Aries', 'Leo'], leastCompatible: ['Virgo', 'Pisces'] },
        'Cancer': { mostCompatible: ['Scorpio', 'Pisces'], compatible: ['Taurus', 'Virgo'], leastCompatible: ['Aries', 'Libra'] },
        'Leo': { mostCompatible: ['Aries', 'Sagittarius'], compatible: ['Gemini', 'Libra'], leastCompatible: ['Taurus', 'Scorpio'] },
        'Virgo': { mostCompatible: ['Taurus', 'Capricorn'], compatible: ['Cancer', 'Scorpio'], leastCompatible: ['Gemini', 'Sagittarius'] },
        'Libra': { mostCompatible: ['Gemini', 'Aquarius'], compatible: ['Leo', 'Sagittarius'], leastCompatible: ['Cancer', 'Capricorn'] },
        'Scorpio': { mostCompatible: [ 'Pisces','Gemini'], compatible: ['Virgo', 'Capricorn'], leastCompatible: ['Leo', 'Aquarius'] },
        'Sagittarius': { mostCompatible: ['Aries', 'Leo'], compatible: ['Libra', 'Aquarius'], leastCompatible: ['Taurus', 'Cancer'] },
        'Capricorn': { mostCompatible: ['Taurus', 'Virgo'], compatible: ['Scorpio', 'Pisces'], leastCompatible: ['Aries', 'Libra'] },
        'Aquarius': { mostCompatible: ['Gemini', 'Libra'], compatible: ['Aries', 'Sagittarius'], leastCompatible: ['Taurus', 'Scorpio'] },
        'Pisces': { mostCompatible: ['Cancer', 'Scorpio'], compatible: ['Taurus', 'Capricorn'], leastCompatible: ['Gemini', 'Sagittarius'] }
      };

      const sign1 = getZodiacSign(date1);
      const sign2 = getZodiacSign(date2);

      const compatibility = zodiacCompatibilities[sign1];

      if (compatibility.mostCompatible.includes(sign2)) return 80;
      else if (compatibility.compatible.includes(sign2)) return 60;
      else if (compatibility.leastCompatible.includes(sign2)) return 40;
      else return 50; 

    }
    function getZodiacSign(date) {
        const month = date.getMonth() + 1;
        const day = date.getDate();
  
        if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Aries';
        else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Taurus';
        else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Gemini';
        else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Cancer';
        else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leo';
        else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgo';
        else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Libra';
        else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Scorpio';
        else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Sagittarius';
        else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Capricorn';
        else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Aquarius';
        else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return 'Pisces';
      }