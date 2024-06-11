$(document).ready(function () {
  let selectedType = 'png'; // default type

  $("#svg").click(function () {
      selectedType = "svg";
      $("#svg").addClass("selected");
      $("#png").removeClass("selected");
      $("#evg").removeClass("selected");
      $("#pdf").removeClass("selected");

  });

  $("#png").click(function () {
      selectedType = "png";
      $("#png").addClass("selected");
      
      $("#svg").removeClass("selected");
      $("#evg").removeClass("selected");
      $("#pdf").removeClass("selected");
  });

  $("#evg").click(function () {
      selectedType = "evg";
      $("#evg").addClass("selected");
      
      $("#png").removeClass("selected");
      $("#svg").removeClass("selected");
      $("#pdf").removeClass("selected");
  });

  $("#pdf").click(function () {
      selectedType = "pdf";
      $("#pdf").addClass("selected");
      
      $("#png").removeClass("selected");
      $("#evg").removeClass("selected");
      $("#svg").removeClass("selected");
  });

  $(".type").click(function () {
      const url = $(".url").val();
      if (url) {
          // Use fetch to call the Node.js backend
          fetch('/generate-qr', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ url: url, type: selectedType }),
          })
          .then(response => response.json())
          .then(data => {
              console.log('Success:', data);
              alert('QR code generated successfully.');
              const downloadLink = document.getElementById('download-link');
              downloadLink.style.display = 'block';
              downloadLink.href = `/download/${data.fileName}`;
              downloadLink.download = data.fileName;
              downloadLink.textContent = 'Download QR Code';
          })
          .catch((error) => {
              console.error('Error:', error);
          });
      } else {
          alert("Please enter a URL.");
      }
  });
});
