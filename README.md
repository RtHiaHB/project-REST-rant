# Project REST-Rant

REST-Rant is an app where users can review restaurants.

<table>
    <tr>
        <th>Method</th>
        <th>Path</th>
        <th>Purpose</th>
    </tr>
    <tr>
        <td>GET</td>
        <td>/</td>
        <td>Home directory</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>/places</td>
        <td>Index page listing all places</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>/places/new</td>
        <td>Form for creating a new place</td>
    </tr>
    <tr>
        <td>POST</td>
        <td>/places</td>
        <td>Create a new place</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>/places/:id</td>
        <td>Show details on one place</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>/places/:id/edit</td>
        <td>Edit page for a place</td>
    </tr>
    <tr>
        <td>PUT</td>
        <td>/places/:id</td>
        <td>Update/change an existing place</td>
    </tr>
    <tr>
        <td>DELETE</td>
        <td>/places/:id</td>
        <td>Delete a place</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>/places/:id/rant/new</td>
        <td>form to add a rant about a place</td>
    </tr>
    <tr>
        <td>POST</td>
        <td>/places/:id/rant</td>
        <td>Add new rant to a place</td>
    </tr>
    <tr>
        <td>DELETE</td>
        <td>/places/:id/rant/:rantId</td>
        <td>Delete a rant</td>
    </tr>
</table>