/*
Mükemmel Sayı Bulma Uygulaması
Bu uygulama, kullanıcıdan bir sayı alır ve bu sayının mükemmel sayı olup olmadığını kontrol eder.
Mükemmel sayılar, kendisi hariç pozitif bölenlerinin toplamı kendisine eşit olan sayılardır. Örneğin, 6 sayısı mükemmel bir sayıdır çünkü 1, 2 ve 3 bölenleri toplamı 6 eder.
Mükemmel sayılar: 6, 28, 496, 8128, 33550336 gibi sayılardır.
*/

function isPerfectNumber(number){
    let toplam = 0;
    for (let i = 1; i < number; i++){
        if (number % i == 0){
            toplam += i;
        }
    }
    if(number == toplam){
        console.log("Bu bir mükemmel sayıdır.");
    }else{
        console.log("Bu bir mükemmel sayı değildir.");
    }
}

isPerfectNumber(6);