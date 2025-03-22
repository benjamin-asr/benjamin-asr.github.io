$('div.rst-content table').addClass('docutils');

function showVideo()
{
    var iframe = document.getElementById("videoIframe");
    
    // Set the iframe src only when user clicks, including autoplay=1 and vq=hd1080
    // Combine query parameters with & (only the first uses ?)
    iframe.src = "https://www.youtube.com/embed/RsdyA4gvoiQ?si=Q4Z8jYD4KkQsTHPz&vq=hd1080&autoplay=1&showinfo=0&rel=0";
    
    // Hide the thumbnail
    document.querySelector(".thumbnail").style.display = "none";

    // Reveal the iframe
    iframe.style.display = "block";
}
