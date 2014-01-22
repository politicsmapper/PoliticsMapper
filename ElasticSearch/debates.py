from converter import convertXMLFile
import re

def applyDebateFormat(debateDict):
    if "id" in debateDict:
        dateSearch = re.search("\d{4}-\d{1,2}-\d{1,2}", debateDict["id"])
    
        if dateSearch:
            debateDict["date"] = dateSearch.group(0)
    

def convertDebateFile(filename):
    debates = convertXMLFile(filename)

    # Filter elements with no content (generally self-closing tags)
    debates = [debate for debate in debates if debate["content"] != ""]

    for debate in debates:
        applyDebateFormat(debate)

    return debates