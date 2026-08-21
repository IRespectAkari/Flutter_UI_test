(function() {
    'use strict';

    const calendarEl = document.querySelector('#container');
    const calendar = new FullCalendar.Calendar(calendarEl, {
        headerToolbar: {
            // left: 'prev,next today',
            left: '',
            center: 'title',
            // right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
            right: ''
        },
        initialDate: '2020-12-01',
        navLinks: true,
        businessHours: true,
        editable: true,
        locale: 'ja',
        events: [
          {
            title: 'カラオケ',
            start: '2020-12-03'
          },
          {
            title: 'ショッピング',
            start: '2020-12-03'
          },
          {
            title: '打ち合わせ',
            start: '2020-12-07T10:00:00',
            end: '2020-12-07T11:00:00'
          },
          {
            title: '打ち上げ',
            start: '2020-12-09T19:00:00'
          },
          {
              title: '会議',
              start: '2020-12-14T11:00:00',
              constraint: 'availableForMeeting'
            },
            {
              title: '打ち合わせ',
              start: '2020-12-14T13:00:00',
              end: '2020-12-14T13:30:00'
            },
            {
              title: '打ち合わせ',
              start: '2020-12-14T15:00:00',
              end: '2020-12-14T15:30:00'
            },
            {
              title: '打ち合わせ',
              start: '2020-12-14T16:30:00',
              end: '2020-12-14T18:00:00'
            },
            {
                title: 'セミナー',
                start: '2020-12-18T15:00:00',
                end: '2020-12-18T17:30:00'
            },
            {
                title: 'パーティー',
                start: '2020-12-23T20:00:00'
            },
            {
            title: '旅行',
            start: '2020-12-26',
            end: '2020-12-31'
          }
        ]
    });

    function scrollToMoveMonth(e) {
      // ブラウザ自体のスクロールを止める
      e.preventDefault();

      // e.deltaY がマイナスなら上スクロール（次の曜日）、プラスなら下（前の曜日）
      if (e.deltaY < 0) {
        // 前の月に
        calendar.prev();
      } else {
        // 次の月に
        calendar.next();
      }

      calendar.render();

    }
    calendarEl.addEventListener('wheel', scrollToMoveMonth, { passive: false })

    calendar.render();
}());

