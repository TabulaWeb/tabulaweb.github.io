import {project} from './api.js'

document.addEventListener('DOMContentLoaded', function() {
    renderTemplateProjects()
})

const templateProjects = (img, linkWebsite, linkGithub, linkBehance, title, tag) => {
    let templateContainer = document.createElement('div')
    templateContainer.classList.add('project-item')
    templateContainer.innerHTML = `
        <div class="project-item__img">
            <img src="${img}" alt="">
            <p>${title}</p>
        </div>
        <div class="project-item__description">
            <div class="project-item__description-links">
            <a href="${linkWebsite}">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="4" fill="#F4F4F4"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 0C1.79086 0 0 1.79086 0 4V36C0 38.2091 1.79086 40 4 40H36C38.2091 40 40 38.2091 40 36V4C40 1.79086 38.2091 0 36 0H4ZM18.1107 11.6992C18.7637 9.79004 19.6657 8.43978 20.4681 8.16862C20.7005 8.08561 21.0934 8.11882 21.3424 8.23503C22.1227 8.6058 22.9362 9.87858 23.556 11.6992C23.7441 12.236 24.209 13.9515 24.209 14.0898C24.209 14.112 22.6927 14.1341 20.8333 14.1341C18.9795 14.1341 17.4577 14.112 17.4577 14.0898C17.4577 13.9515 17.9225 12.236 18.1107 11.6992ZM17.098 8.70541C15.3437 9.29753 13.9049 10.1719 12.5658 11.4779C11.8298 12.1917 11.3206 12.806 10.8226 13.5807L10.485 14.1065L13.097 14.1231C14.5303 14.1286 15.7256 14.1175 15.7422 14.0954C15.7643 14.0677 15.8252 13.8408 15.8805 13.5807C16.2402 11.8486 16.8434 10.1165 17.4909 8.9821C17.6292 8.73861 17.7344 8.52833 17.7233 8.51726C17.7122 8.50619 17.43 8.59473 17.098 8.70541ZM24.1758 8.97657C24.043 8.73861 23.9323 8.53939 23.9323 8.52279C23.9323 8.47299 24.8232 8.77181 25.4098 9.02084C27.6234 9.94499 29.5326 11.5498 30.8441 13.5807L31.1816 14.1065L28.5697 14.1231C27.1364 14.1286 25.9411 14.1175 25.9245 14.0954C25.9023 14.0677 25.8581 13.9017 25.8193 13.7191C25.4486 11.915 24.8343 10.1442 24.1758 8.97657ZM7.13704 15.9216C6.99316 15.999 6.87142 16.1263 6.79394 16.2923L6.66667 16.5358V20V23.4642L6.79394 23.7077C6.87142 23.8737 6.99316 24.001 7.13704 24.0785L7.3584 24.2057H20.8333H34.3083L34.5296 24.0785C34.6735 24.001 34.7952 23.8737 34.8727 23.7077L35 23.4642V20V16.5358L34.8783 16.2923C34.7952 16.1263 34.6735 15.999 34.5296 15.9216L34.3083 15.7943H20.8333H7.3584L7.13704 15.9216ZM21.3148 17.8529C21.4531 17.9359 21.5693 18.113 21.835 18.6774C22.0286 19.0703 22.1947 19.3913 22.2113 19.3913C22.2279 19.3913 22.3551 19.1257 22.4935 18.7992C22.7702 18.1296 22.9583 17.8805 23.2516 17.7809C23.7773 17.6094 24.3197 18.0078 24.3197 18.5667C24.3197 18.8047 23.0137 21.8483 22.82 22.0531C22.5488 22.3464 22.0452 22.3685 21.7077 22.1084C21.6302 22.0475 21.4144 21.6712 21.2207 21.2507C21.0215 20.8356 20.8499 20.498 20.8333 20.498C20.8167 20.498 20.6396 20.8245 20.446 21.2174C20.2467 21.6159 20.0199 22.0033 19.9424 22.0807C19.6491 22.363 19.1234 
                22.3519 18.8356 22.0641C18.6253 21.8594 17.347 18.8434 17.347 18.5612C17.347 18.2845 17.5186 18.0023 17.7676 17.8584C18.0166 17.7145 18.2158 17.6979 18.4704 17.8086C18.7471 17.9248 18.8743 18.1019 19.1455 18.7549C19.2894 19.0924 19.4222 19.3802 19.4443 19.4079C19.4665 19.43 19.638 19.1257 19.8317 18.7327C20.2025 17.958 20.2744 17.8695 20.5954 17.7533C20.8389 17.6702 21.0602 17.6979 21.3148 17.8529ZM29.8812 17.8639C29.9919 17.9525 30.1579 18.2181 30.3682 18.6387C30.5397 18.9984 30.6836 19.3083 30.6836 19.3415C30.6836 19.513 30.8164 19.3083 31.0654 18.7327C31.2259 18.373 31.4085 18.0244 31.4749 17.9635C31.8568 17.6094 32.4157 17.6758 32.7422 18.124C32.9635 18.4229 32.9137 18.6387 32.2054 20.2767C31.8457 21.1123 31.5026 21.8649 31.4417 21.9535C31.2812 22.1859 31.0433 22.2855 30.7002 22.2578C30.2907 22.2246 30.1523 22.0752 29.7373 21.1842L29.3887 20.4427L28.9792 21.2396C28.6582 21.8815 28.5365 22.0641 28.387 22.1582C28.0384 22.374 27.485 22.2799 27.2858 21.9756C27.236 21.9092 26.9095 21.1676 26.5553 20.332C25.8415 18.6663 25.7861 18.4395 26.013 18.1351C26.2288 17.8473 26.4779 17.7201 26.7656 17.7477C27.2028 17.7865 27.3522 17.9469 27.6953 18.7549L27.9886 19.4521L28.3815 18.6885C28.7467 17.9801 28.791 17.9137 29.0234 17.7975C29.3223 17.6426 29.6211 17.6702 29.8812 17.8639ZM9.97038 17.8363C10.2526 17.9691 10.3024 18.0466 10.6234 18.8102C10.7617 19.1423 10.889 19.4245 10.9001 19.4355C10.9111 19.4466 11.0827 19.1367 11.2764 18.7493C11.7135 17.875 11.8132 17.7754 12.2448 17.7422C12.7484 17.709 12.8701 17.8252 13.3073 18.7217L13.6725 19.4632L13.9105 18.8877C14.237 18.113 14.3311 17.9691 14.5967 17.8363C14.973 17.6426 15.3659 17.7533 15.6536 18.1406C15.8861 18.445 15.8252 18.6663 15.0892 20.3542C14.6852 21.2839 14.3587 21.9645 14.2646 22.0586C13.9492 22.3906 13.4069 22.374 13.1025 22.0309C13.0195 21.9313 12.7982 21.5329 12.6156 21.14L12.2891 20.4316L11.9128 21.1953C11.5088 22.0199 11.3815 22.1748 11.0384 22.2744C10.8558 22.3298 10.7783 22.3242 10.568 22.2467C10.4352 22.1914 10.2747 22.0807 10.2139 22.0033C10.0866 21.8206 8.88021 18.9984 8.82487 18.7383C8.74186 18.3841 8.95768 17.9525 9.28971 17.8086C9.52213 17.709 9.69922 17.7145 9.97038 
                17.8363ZM12.5658 28.5221C11.7467 27.7253 11.1491 26.9837 10.6012 26.0706L10.474 25.8659L13.1191 25.877L15.7643 25.8936L15.8363 26.2533C16.2458 28.1624 16.8545 29.9167 17.502 31.04C17.6403 31.2891 17.6956 31.4329 17.6569 31.444C17.5518 31.4661 16.6055 31.1397 15.9635 30.8519C14.7184 30.2985 13.6117 29.5404 12.5658 28.5221ZM17.4577 25.9102C17.4577 25.9323 17.5573 26.3363 17.6735 26.8066C18.3542 29.5016 19.3171 31.2835 20.3574 31.765C20.7116 31.931 20.9551 31.931 21.3092 31.765C22.3441 31.2835 23.3125 29.4961 23.9932 26.8066C24.1094 26.3363 24.209 25.9323 24.209 25.9102C24.209 25.888 22.6927 25.8659 20.8333 25.8659C18.9795 25.8659 17.4577 25.888 17.4577 25.9102ZM25.7939 26.3951C25.8454 26.1587 25.8878 25.964 25.8968 25.9323C25.9134 25.8825 26.4945 25.8659 28.5586 25.8659H31.1927L31.0654 26.0706C30.1413 27.6035 28.8242 28.9759 27.3633 29.9388C26.6771 30.387 26.1403 30.6748 25.4098 30.9792C24.8011 31.2337 24.0706 31.4772 23.9876 31.444C23.9655 31.4329 24.043 31.2503 24.1647 31.04C24.79 29.9609 25.3766 28.2952 25.7585 26.5576C25.7705 26.5023 25.7824 26.4477 25.7939 26.3951Z" fill="#393939"/>
                </svg>
            </a>
            <a href="${linkGithub}">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_7_399)">
                <rect width="40" height="40" rx="4" fill="#F4F4F4"/>
                <path d="M4 0C1.79086 0 0 1.79086 0 4V36C0 38.2091 1.79086 40 4 40H36C38.2091 40 40 38.2091 40 36V4C40 1.79086 38.2091 0 36 0H4ZM22.3047 8.24219C25.9453 8.92188 29.1328 11.1875 30.9375 14.375C33.3906 18.7187 32.8906 24.2266 29.6953 28.0234C28.3515 29.625 26.6875 30.8438 24.7968 31.6172C23.8593 32 23.5078 32.0312 23.25 31.7734L23.0468 31.5703V29.4297C23.0468 27.0469 23.0078 26.7891 22.5468 26.1094L22.2812 25.7188L22.6875 25.6641C24.9609 25.3594 26.5 24.4297 27.2578 22.8828C27.6484 22.0859 27.789 21.5469 27.8906 20.4922C27.9765 19.5547 27.8906 18.6484 27.6406 17.9844C27.4843 17.5469 26.8906 16.5469 26.7343 16.4531C26.6797 16.4219 26.6953 16.25 26.7734 15.9531C27 15.0938 26.7656 13.1797 26.4219 13.1094C25.8984 13 24.6718 13.4141 23.6797 14.0234L23.125 14.3672L22.4375 14.2109C21.1015 13.8984 18.6406 13.9297 17.3359 14.2656L16.8906 14.375L16.289 14.0078C15.25 13.3828 13.8593 12.9453 13.5078 13.1328C13.4375 13.1641 13.3203 13.4141 13.25 13.6719C13.0468 14.3984 13.0156 15.1094 13.1562 15.7812C13.2656 16.2969 13.2656 16.375 13.164 16.5234C12.2265 17.7812 11.9765 18.6406 12.0547 20.2344C12.1484 21.9531 12.6015 23.0938 13.5859 24.0625C14.0234 24.5 14.3359 24.7344 14.7812 24.9453C15.4218 25.2578 16.5234 25.5781 17.2265 25.6641C17.4609 25.6953 17.6562 25.7344 17.6562 25.75C17.6562 25.7656 17.539 25.9297 17.3984 26.1172C17.25 26.3047 17.0937 26.6328 17.039 26.8438C16.9843 27.0547 16.9218 27.2656 16.914 27.3203C16.8672 27.4766 16.0937 27.6562 15.4609 27.6562C14.9297 27.6562 14.7968 27.625 14.3593 27.3984C13.9453 27.1875 13.7812 27.0391 13.3203 26.4219C12.7031 25.6094 12.5 25.4375 11.9453 25.2266C11.5 25.0547 11.1015 25.0391 10.9062 25.1797C10.7109 25.3203 10.8047 25.4844 11.3359 25.8672C11.8906 26.2656 12.2578 26.7344 12.5859 27.4766C13.1875 28.7969 14.1093 29.3828 15.5859 29.3828C15.9765 29.3828 16.4297 29.3594 16.5859 29.3359L16.875 29.2812V30.4375C16.875 31.5156 16.8672 31.6016 16.7031 31.7734C16.3906 32.1016 15.789 31.9609 14.289 31.2109C9.61716 28.8672 6.94529 23.875 7.61716 18.7344C8.30466 13.4531 12.4843 9.13281 17.7343 8.25C18.1406 8.17969 18.5625 8.10937 18.6718 8.09375C19.125 8.01562 21.6328 8.11719 22.3047 8.24219Z" fill="#393939"/>
                </g>
                <defs>
                <clipPath id="clip0_7_399">
                <rect width="40" height="40" fill="white"/>
                </clipPath>
                </defs>
                </svg>
            </a>
            <a href="${linkBehance}">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_7_401)">
                <rect width="40" height="40" rx="4" fill="#F4F4F4"/>
                <path d="M4 0C1.79086 0 0 1.79086 0 4V36C0 38.2091 1.79086 40 4 40H36C38.2091 40 40 38.2091 40 36V4C40 1.79086 38.2091 0 36 0H4ZM16.5234 12.3047C17.7734 12.5703 18.8437 13.3281 19.3124 14.2734C19.7499 15.1641 19.7109 16.5703 19.2187 17.5625C18.9609 18.0703 18.4062 18.6719 17.914 18.9609L17.5859 19.1484L18.2187 19.4766C19.3203 20.0391 20.039 20.9219 20.2343 21.9453C20.4374 23.0078 20.2734 24.4297 19.8671 25.1719C19.5312 25.7812 18.7187 26.4922 17.8749 26.9062C16.6484 27.5078 16.5546 27.5156 11.7421 27.5547L7.49995 27.5938V19.8906V12.1875H11.7421C15.1718 12.1875 16.0781 12.2109 16.5234 12.3047ZM29.9999 13.9844V14.7656H26.8749H23.7499V13.9844V13.2031H26.8749H29.9999V13.9844ZM27.6015 16.0937C29.1093 16.3125 30.4843 17.1562 31.3749 18.3984C32.0859 19.4062 32.414 20.3906 32.4765 21.7734L32.5234 22.7344H28.4921C25.9453 22.7344 24.4453 22.7656 24.414 22.8125C24.3437 22.9297 24.5312 23.8281 24.6953 24.1562C24.9374 24.6328 25.3671 25.0547 25.8437 25.2891C26.2421 25.4844 26.3671 25.5078 27.1093 25.5078C27.8515 25.5078 27.9687 25.4844 28.3359 25.2969C28.8359 25.0312 29.2343 24.6875 29.4531 24.3281L29.6249 24.0625H30.914H32.2109L32.1562 24.3125C32.039 24.8906 31.5468 25.7188 30.9843 26.2969C30.0546 27.2344 28.8906 27.7109 27.2968 27.7891C26.7734 27.8125 26.2187 27.7969 25.8906 27.7422C24.1874 27.4453 22.6718 26.2969 21.914 24.7344C20.1171 21.0234 22.2343 16.6797 26.1328 16.0937C26.6953 16.0078 26.9999 16.0078 27.6015 16.0937Z" fill="#393939"/>
                <path d="M10.8594 16.6094V18.3672L12.9141 18.3438C14.9375 18.3203 14.9688 18.3203 15.3984 18.1172C16.1172 17.7812 16.4844 17.1016 16.3672 16.3359C16.2969 15.875 16.1641 15.625 15.8281 15.3281C15.3438 14.9062 14.9688 14.8438 12.7969 14.8438H10.8594V16.6094Z" fill="#393939"/>
                <path d="M10.9141 20.75C10.8828 20.7812 10.8594 21.7344 10.8594 22.8672V24.9297L13.1094 24.9062C15.2734 24.8828 15.3672 24.875 15.7578 24.6953C16.2422 24.4844 16.7344 23.9766 16.875 23.5625C17.0156 23.1328 16.9453 22.2187 16.75 21.8359C16.6641 21.6641 16.4375 21.4062 16.2578 21.2734C15.6562 20.8125 15.3437 20.7578 13.0469 20.7187C11.9062 20.7031 10.9531 20.7187 10.9141 20.75Z" fill="#393939"/>
                <path d="M26.3672 18.4297C25.4297 18.6719 24.6328 19.5391 24.4844 20.4609L24.4297 20.7812H26.9062H29.375L29.3281 20.5625C29.1016 19.6406 28.625 18.9687 27.9453 18.6406C27.5078 18.4219 26.7656 18.3281 26.3672 18.4297Z" fill="#393939"/>
                </g>
                <defs>
                <clipPath id="clip0_7_401">
                <rect width="40" height="40" fill="white"/>
                </clipPath>
                </defs>
                </svg>
            </a>
            </div>
            <div class="project-item__description-category">
            <p>${tag}</p>
            </div>
        </div>
    `

    document.querySelector('.project').append(templateContainer)
}

const renderTemplateProjects = () => {
    project.projects.forEach(proj => {
        templateProjects(proj.urlImage, proj.urlProject, proj.urlCode, proj.urlDesign, proj.title, proj.tag)
    })
}

const filterTemplate = (condition) => {
    let filterProject = project.projects.filter(proj => proj.tag == condition)

    document.querySelector('.project').innerHTML = ''

    filterProject.forEach(proj => {
        templateProjects(proj.urlImage, proj.urlProject, proj.urlCode, proj.urlDesign, proj.title, proj.tag)
    })
}

const conditionsFilter = (event) => {
    if(event.classList.contains('active')){
        event.classList.remove('active')
        document.querySelector('.project').innerHTML = ''
        renderTemplateProjects()
    } else {
        document.querySelectorAll('.filter button').forEach(button => {
            button.classList.remove('active')
        })
        event.classList.add('active')
    }
}

website.addEventListener('click', function(event){
    filterTemplate('Website')

    conditionsFilter(event.target)
})
mobile.addEventListener('click', function(event){
    filterTemplate('Mobile app')

    conditionsFilter(event.target)
})
desktop.addEventListener('click', function(event){
    filterTemplate('Desctop app')

    conditionsFilter(event.target)
})
