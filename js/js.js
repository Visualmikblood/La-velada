/*document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    
    const slider = document.querySelector('.div_con_todos_los_boxeadores_sin_las_flechas');
    const images = document.querySelectorAll('.imagenes_slider');

    slider.addEventListener('scroll', () => {
        console.log('Scrolling...');
        images.forEach(image => {
            const rect = image.getBoundingClientRect();
            const sliderRect = slider.getBoundingClientRect();
            console.log('rect:', rect);
            console.log('sliderRect:', sliderRect);

            // Calcular el centro de la imagen y el centro del slider
            const imageCenter = rect.left + rect.width / 2;
            const sliderCenter = sliderRect.left + sliderRect.width / 2;

            // Verificar si el centro de la imagen está cerca del centro del slider
            const isInCenter = Math.abs(imageCenter - sliderCenter) < rect.width / 2;
            console.log('isInCenter:', isInCenter);

            if (isInCenter) {
                console.log('Imagen en el centro:', image.src);
                document.querySelector('.figure_de_luchadores_cuerpo_completo img').src = 'img/luchadores/cuerpo_completo/shelao-big.webp';
            }
        });
    });
});
*/


/*document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    
    const slider = document.querySelector('.div_con_todos_los_boxeadores_sin_las_flechas');
    const images = document.querySelectorAll('.imagenes_slider');

    slider.addEventListener('scroll', () => {
        console.log('Scrolling...');
        images.forEach(image => {
            const rect = image.getBoundingClientRect();
            const sliderRect = slider.getBoundingClientRect();
            console.log('rect:', rect);
            console.log('sliderRect:', sliderRect);

            // Calcular el centro de la imagen y el centro del slider
            const imageCenter = rect.left + rect.width / 2;
            const sliderCenter = sliderRect.left + sliderRect.width / 2;

            // Verificar si el centro de la imagen está cerca del centro del slider
            const isInCenter = Math.abs(imageCenter - sliderCenter) < rect.width / 2;
            console.log('isInCenter:', isInCenter);

            if (isInCenter) {
                console.log('Imagen en el centro:', image.src);
                // Extraer el nombre del archivo de la imagen pequeña
                const imageName = image.src.split('/').pop().replace('-small.webp', '-big.webp');
                // Construir la ruta de la imagen grande
                const bigImagePath = `img/luchadores/cuerpo_completo/${imageName}`;
                // Cambiar la imagen grande a la ruta especificada
                document.querySelector('.figure_de_luchadores_cuerpo_completo img').src = bigImagePath;
            }
        });
    });
});
*/


document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    
    const slider = document.querySelector('.div_con_todos_los_boxeadores_sin_las_flechas');
    const images = document.querySelectorAll('.imagenes_slider');

    slider.addEventListener('scroll', () => {
        console.log('Scrolling...');
        images.forEach(image => {
            const rect = image.getBoundingClientRect();
            const sliderRect = slider.getBoundingClientRect();
            console.log('rect:', rect);
            console.log('sliderRect:', sliderRect);

            // Calcular el centro de la imagen y el centro del slider
            const imageCenter = rect.left + rect.width / 2;
            const sliderCenter = sliderRect.left + sliderRect.width / 2;

            // Verificar si el centro de la imagen está cerca del centro del slider
            const isInCenter = Math.abs(imageCenter - sliderCenter) < rect.width / 2;
            console.log('isInCenter:', isInCenter);

            if (isInCenter) {
                console.log('Imagen en el centro:', image.src);
                // Extraer el nombre del archivo de la imagen pequeña
                const imageName = image.src.split('/').pop().replace('-small.webp', '-big.webp');
                // Construir la ruta de la imagen grande
                const bigImagePath = `img/luchadores/cuerpo_completo/${imageName}`;
                // Cambiar la imagen grande a la ruta especificada
                document.querySelector('.figure_de_luchadores_cuerpo_completo img').src = bigImagePath;
                // Cambiar el nombre del luchador
                document.getElementById('nombre_luchador').textContent = image.getAttribute('data-nombre');
                // Cambiar la bandera del luchador
                document.getElementById('bandera_luchador').src = image.getAttribute('data-bandera');
            }
        });
    });
});

