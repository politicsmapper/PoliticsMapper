import elementtree.ElementTree as ET

def flatten(elem, include_tags=True, include_tail=0):
    text = elem.text or ""

    if not include_tags:
        for e in elem:
            text += flatten(e, include_tags=include_tags, include_tail=1)
        if include_tail and elem.tail: text += elem.tail

    else:
        for e in elem:
            text += ET.tostring(e)
    
    return text

def stripNewLines(s, beginning=True, end=True):
    result = s[:]
    while beginning and len(result) > 0 and result[0] == "\n":
        result = result[1:]

    while end and len(result) > 0 and result[len(result)-1] == "\n":
        result = result[:len(result)-1]

    return result

def toDict(elem):
    elemDict = {"tag": elem.tag,
                "content": stripNewLines(flatten(elem, include_tags=False)),
                "content-orig": flatten(elem)}
    for attr, value in elem.items():
        elemDict[attr] = value

    return elemDict

def convertElements(root):
    entries = []
    for elem in root:
        entries.append(toDict(elem))

    return entries

def convertXMLFile(filename):
    tree = ET.parse(filename)
    root = tree.getroot()
    return convertElements(root)