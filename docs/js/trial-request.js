/* --------------------------------------------------------------------------
 * Elements
 * ------------------------------------------------------------------------*/
const pg_form = document.getElementById('accessForm');
const pg_msg  = document.getElementById('trial-msg');

/* --------------------------------------------------------------------------
 * Helpers
 * ------------------------------------------------------------------------*/
async function postForm(actionUrl, formData)
{
    const response = await fetch(actionUrl, {
        method  : 'POST',
        body    : formData,
        headers : { 'X-Requested-With': 'fetch' }   // hint for PHP
    });

    return response.json();
}

/* --------------------------------------------------------------------------
 * Main handler
 * ------------------------------------------------------------------------*/
async function handleSubmit(event)
{
    event.preventDefault();                         // keep the page in place

    try
    {
        const data   = new FormData(pg_form);
        const result = await postForm(pg_form.action, data);

        if( result.status==='ok' )
        {
            pg_msg.textContent = 'Thank you for your interest in Benjamin-ASR. </br> We\'ve sent you an email on how to proceed.';
            pg_msg.className   = 'trial-msg-ok';
            pg_form.reset();
        }
        else
        {
            pg_msg.textContent = result.error || 'Sorry - server could not sent request.';
            pg_msg.className   = 'trial-msg-err';
        }
    }
    catch( _err )
    {
        pg_msg.textContent = 'Network error - please try again.';
        pg_msg.className   = 'trial-msg-err';
    }
}

/* --------------------------------------------------------------------------
 * Wiring
 * ------------------------------------------------------------------------*/
pg_form.addEventListener('submit', handleSubmit);
