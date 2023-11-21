const containes = document.querySelectorAll('.container_Information')
const navlist = document.getElementById('container_navbar_list')

navlist.childNodes.forEach((nav, index) => {
    nav.addEventListener('click', () => {

        console.log(navlist, index, containes);

        const ContainerActive = document.querySelector('.container_Active')
        if (ContainerActive) {
            ContainerActive.classList.remove('container_Active')
            document.querySelector('.active').classList.remove('active')
        }
        switch (index) {
            case 1:
                var count = 0
                break;
            case 3:
                var count = 1
                break;
            case 5:
                var count = 2
                break;
            case 7:
                var count = 3
                break;
        }
        containes[count].classList.add('container_Active')
        nav.classList.add('active')
    })
})

