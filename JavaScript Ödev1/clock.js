// Kullanıcının adını alıp ekrana yerleştirecek fonksiyon
function setName() {
    const name = prompt("Adınızı girin:");
    if (name) {
      document.getElementById("myName").textContent = name;
    } else {
      document.getElementById("myName").textContent = "Ziyaretçi";
    }
  }
  
  // Saatin doğru şekilde çalışmasını sağlayacak fonksiyon
  function showTime() {
    const timeElement = document.getElementById("myClock");
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    // Saatin doğru formatta görünmesi için 0'lı sayıları kontrol et
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  
    // Saatin ekran üzerinde gösterilmesi
    timeElement.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    
    // Saatin her saniye bir kez güncellenmesi
    setTimeout(showTime, 1000);
  }
  
  // Sayfa yüklendiğinde bu fonksiyonları çalıştır
  window.onload = function() {
    setName(); // Kullanıcı adını al
    showTime(); // Saati göster
  };
  