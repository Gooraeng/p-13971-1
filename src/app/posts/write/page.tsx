"use client";

const NEXT_PUBLIC_API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function Page() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;

        const titleInput = form.elements.namedItem("title") as HTMLInputElement;
        const contentTextarea = form.elements.namedItem("content") as HTMLTextAreaElement;

        const title = titleInput.value.trim();

        if (title.length == 0) {
            alert("제목을 입력해주세요.");
            titleInput.focus();
            
            return;
        }

        const content = contentTextarea.value.trim();

        if (content.length == 0) {
            alert("내용을 입력해주세요.");
            contentTextarea.focus();

            return;
        }

        fetch(`${NEXT_PUBLIC_API_BASE_URL}/api/v1/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({ title: title, content: content }),
        })
            .then(response => response.json())
            .then((data) => {
                alert(data.msg)
            })
    }

    return (
        <>
            <h1>글 쓰기</h1>

            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                <input className="border p-2 rounded" type="text" name="title" placeholder="제목" />
                <textarea className="border p-2 rounded" name="content" placeholder="내용" />
                <button className="border p-2 rounded" type="submit">저장</button>
            </form>
        </>
    );
}