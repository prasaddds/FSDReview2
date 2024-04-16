<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
  <body>
    <h2>Bug Records</h2>
    <table border="1">
      <tr bgcolor="#9acd32">
        <th>Title</th>
        <th>Description</th>
        <th>Issue Date</th>
        <th>Progress</th>
        <th>Action Assigned To</th>
        <th>Action Status</th>
        <th>Close Bug</th>
      </tr>
      <xsl:for-each select="bugs/bug">
      <tr>
        <td><xsl:value-of select="title"/></td>
        <td><xsl:value-of select="description"/></td>
        <td><xsl:value-of select="issue_date"/></td>
        <td><xsl:value-of select="progress"/></td>
        <td><xsl:value-of select="action_assigned_to"/></td>
        <td><xsl:value-of select="action_status"/></td>
        <td><xsl:value-of select="close_bug"/></td>
      </tr>
      </xsl:for-each>
    </table>
  </body>
  </html>
</xsl:template>

</xsl:stylesheet>
