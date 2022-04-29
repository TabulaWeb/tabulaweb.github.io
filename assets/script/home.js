import api from './api.js'

window.addEventListener('mouseover', function(event){
    let target = event.target
    
    if(target.closest('.project-name p')){
        document.querySelectorAll('.project-name p').forEach(element => {
            element.classList.remove('active')
        })

        if(document.querySelector('.project-name p').classList.contains('active')) {
            document.querySelector('.project-name p').classList.remove('active')
        }
        target.classList.add('active')

        let apiCode = target.getAttribute('data-api')
        document.querySelector('.project-image img').setAttribute('src', api.projects[apiCode-1].urlImage)
        document.querySelector('.project-image .project-image__urls .project-image__urls-proj').setAttribute('href', api.projects[apiCode-1].urlProject)
        document.querySelector('.project-image .project-image__urls .project-image__urls-design').setAttribute('href', api.projects[apiCode-1].urlDesign)
        document.querySelector('.project-image .project-image__urls .project-image__urls-code').setAttribute('href', api.projects[apiCode-1].urlCode)
    }
})
