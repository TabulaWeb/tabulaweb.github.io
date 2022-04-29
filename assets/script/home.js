import api from './api.js'

const events = [1]
window.addEventListener('click', function(event){
    let target = event.target
    
    if(target.closest('.project-name p')){
        document.querySelectorAll('.project-name p').forEach(element => {
            element.classList.remove('active')
        })
        target.classList.add('active')

        let apiCode = +target.getAttribute('data-api')

        if(events[events.length - 1] != apiCode){
            document.querySelector('.project-name').style.pointerEvents = 'none'
            if(document.querySelector('.project-image').classList.contains('event')) {
                document.querySelector('.project-image').classList.remove('event')
                setTimeout(() => {
                    document.querySelector('.project-image img').setAttribute('src', api.projects[apiCode-1].urlImage)
                    document.querySelector('.project-image .project-image__urls .project-image__urls-proj').setAttribute('href', api.projects[apiCode-1].urlProject)
                    document.querySelector('.project-image .project-image__urls .project-image__urls-design').setAttribute('href', api.projects[apiCode-1].urlDesign)
                    document.querySelector('.project-image .project-image__urls .project-image__urls-code').setAttribute('href', api.projects[apiCode-1].urlCode)
                    document.querySelector('.project-image').classList.add('event')
                    
                    document.querySelector('.project-name').style.pointerEvents = 'auto'
                }, 1000)
            }
        }
        events.push(apiCode)
    }
})


// window.addEventListener('mouseout', function(event){
//     let target = event.target

//     if(target.closest('.project-name p')){
//         document.querySelector('.project-image').style.marginTop = '50px'
//         document.querySelector('.project-image').style.opacity = '0'
//     }
// })