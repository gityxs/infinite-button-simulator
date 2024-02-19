overlays.changelog = {
    create(overlay) {
        let holder = document.createElement("div");
        overlay.append(holder);

        let title = document.createElement("div");
        title.classList.add("title");
        title.textContent = "Changelog";
        holder.append(title);

        let closebtn = document.createElement("button");
        closebtn.classList.add("close");
        closebtn.onclick = () => overlay.remove();
        title.append(closebtn);

        let content = document.createElement("div");
        content.classList.add("content", "changelog");
        holder.append(content);

        let list;

        function addTitle(text, version) {
            let title = document.createElement("h2");
            content.append(title);

            let textBox = document.createElement("b");
            textBox.textContent = text;
            title.append(textBox);
            title.append(" ");
            let verBox = document.createElement("i");
            verBox.textContent = version;
            title.append(verBox);

            list = document.createElement("ul");
            content.append(list);
        }

        function addChange(text) {
            let item = document.createElement("li");
            item.textContent = text;
            list.append(item);
        }

        addTitle("Half-a-Collapse Update", "v1.1");
        addChange("Added Collapse preview.");
        addChange("Polished some user interface.");
        addChange("Fix a few game-breaking bugs.");

        addTitle("Initial Release", "v1.0");
        addChange("Initial release.");
        addChange("Created this game.");
    },
}