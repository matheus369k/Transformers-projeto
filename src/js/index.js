const containes = document.querySelectorAll('.container_Information')

const navlist = document.getElementById('container_navbar_list')

navlist.childNodes.forEach((nav, index) => {
    nav.addEventListener('click', () => {

        SwitchPage(index, nav)

        return

    })
})



const FocusImg = document.getElementById("slide_img");



setInterval(() => {

    AutoSwitchImg();

}, 8000);

const slideli = document.querySelectorAll(".slide")


slideli.forEach((img, index) => {

    img.addEventListener("click", ()=>{

        RemoveClassThumbSelected(img);

        FocusImg.src=`./src/img/${Number(index) + 1}.jpeg`

        return
    })
})

function SwitchPage(index, nav) {

    const ContainerActive = document.querySelector('.container_Active')

    if (ContainerActive) {

        ContainerActive.classList.remove('container_Active')

        document.querySelector('.active').classList.remove('active')

    }

    switch (index) {

        case 1:

            var count = 0

            break

        case 3:

            var count = 1

            break

        case 5:

            var count = 2

            break
    }

    containes[count].classList.add('container_Active')

    nav.classList.add('active')


    return
}



function AutoSwitchImg() {

    const urlImg = FocusImg.attributes.src.value;

    RemoveClassThumbSelected(slideli[urlImg[(urlImg.length) - 6]])

    FocusImg.src = `./src/img/${Number(urlImg[(urlImg.length) - 6]) + 1}.jpeg`;


    return 
}



function RemoveClassThumbSelected(img) {

    const thumbselected = document.querySelector(".container_information_slide_list_img_selected");

    if (thumbselected) {

        thumbselected.classList.remove("container_information_slide_list_img_selected");

    }

    img.classList.add("container_information_slide_list_img_selected");

    return
}
