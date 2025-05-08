const pg_form = document.getElementById('accessForm');
const pg_msg = document.getElementById('pg_msg');

pg_form.addEventListener('submit', function (e) 
{
    e.preventDefault();                           // keep the page in place

    const data = new FormData(pg_form);

    fetch(pg_form.action, {
        method: 'POST',
        body: data,
        headers: { 'X-Requested-With': 'fetch' }  // optional hint for PHP
    })
        .then(r => r.json())
        .then(res => {
            if (res.status === 'ok') {
                pg_msg.textContent = 'Thank you – your request has been sent.';
                pg_msg.className = 'ok';
                pg_form.reset();
            } else {
                pg_msg.textContent = res.error || 'Sorry – message could not be sent.';
                pg_msg.className = 'err';
            }
        })
        .catch(() => {
            pg_msg.textContent = 'Network error – please try again.';
            pg_msg.className = 'err';
        });
});