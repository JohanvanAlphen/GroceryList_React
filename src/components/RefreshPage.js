import React from 'react'

function RefreshPage() {

    const refreshPage = () => {
        window.location.reload();
    }
    return (
        <button onClick={refreshPage} className="refresh-button">Refresh page</button>
    )
}

export default RefreshPage
