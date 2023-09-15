$(document).ready(function() {
    var images = $(".image-column img");
    var titles = $(".image-column p");
    var currentImageIndex = 0;

    function showLightbox(index) {
        currentImageIndex = index;
        var img = $(images[index]);
        var title = $(titles[index]).text();
        var description = img.attr("alt"); // Assuming the alt attribute contains the description

        $("#lightbox-image").attr("src", img.attr("src"));
        $("#lightbox-title").text(title);
        $("#lightbox-description").text(description);
        $("#lightbox").removeClass("hidden");
    }

    function changeImage(direction) {
        currentImageIndex += direction;
        if (currentImageIndex < 0) {
            currentImageIndex = images.length - 1;
        } else if (currentImageIndex >= images.length) {
            currentImageIndex = 0;
        }
        showLightbox(currentImageIndex);
    }

    $(".image-column img").click(function() {
        var index = $(".image-column img").index(this);
        showLightbox(index);
    });
    

    $("#lightbox").click(function(e) {
        if (e.target === this) {
            $(this).addClass("hidden");
        }
    });

    $("#prev").click(function() {
        changeImage(-1);
    });

    $("#next").click(function() {
        changeImage(1);
    });

    // Keyboard navigation
    $(document).keydown(function(e) {
        if (e.key === "Escape") {
            $("#lightbox").addClass("hidden");
        }
        if (e.key === "ArrowRight") {
            changeImage(1);
        }
        if (e.key === "ArrowLeft") {
            changeImage(-1);
        }
    });
});
