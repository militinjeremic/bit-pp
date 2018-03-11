const mainModule = ((UIModule, dataModule) => {
    const init = () => {
        const request = $.ajax({
            url: 'http://api.tvmaze.com/shows',
            method: "GET"
        });

        request.done(response => {
            const shows = dataModule.adaptTvShows(response);
            console.log(shows);    
            UIModule.displayMainPage(shows);
        });
    }

    $("body").on('click', '.card-body', function () {
        console.log(this);
        var id = $(this).attr('id');
        console.log(id);
        //sacuvati u localStorage-u nas id
        localStorage.setItem('id', id);
        location.href = "show-info.html";

    });

    const returnShowDetails = () => {
        var id = localStorage.getItem('id');
        

        let seasons = null;
        let casts = null;
        const request2 = $.ajax({
            url: 'http://api.tvmaze.com/shows/' + id + '/seasons',
            method: "GET"
        });
            request2.done(response => {
                seasons = dataModule.adaptSeason(response);
                console.log(seasons);           
            });

        const request3 = $.ajax({
            url: 'http://api.tvmaze.com/shows/' + id + '/cast',
            method: "GET"
        });
            request3.done(response => {
                casts = dataModule.adaptCasts(response);
                console.log(casts);

            });
        
        const request = $.ajax({
            url: 'http://api.tvmaze.com/shows/' + id,
            method: "GET"
        });

            request.done(response => {
                const show = dataModule.adaptTvShowDetails(response.name,response.image.original,id,seasons,casts,response.summary);
                console.log(show);
                //TODO: uzmemo sve ovo i posaljemo u neku metodu da sredi html!
                UIModule.displaySingleShow(show);
        
            });
    }



    // let el = `<div><h1></h1><img src="" alt=""></div>`
    // $("#singleShow").append(el);

    // let seasonRequest = $.ajax({
    //     url: `https://api.tvmaze.com/shows/${test}/seasons`,
    //     method: 'GET'
    // })
    // seasonRequest.done(function (resSeasons) {


    // })

    return {
        init,
        returnShowDetails
    }
})(UIModule, dataModule);