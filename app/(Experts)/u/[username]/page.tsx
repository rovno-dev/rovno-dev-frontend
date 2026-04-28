import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Container } from "@/components/ui/container"
import Image from "next/image"

export default async function ExpertProfile({ params }: { params: Promise<{ username: string }> }) {
  const { username } = await params;

  const serverPath = path.join(process.cwd(), "public", "_static/experts/", username);
  const mdFilePath = path.join(serverPath, "data.md");
  const avatarPath = `/_static/experts/${username}/avatar.png`;

  if (!fs.existsSync(mdFilePath)) return notFound();

  const fileContent = fs.readFileSync(mdFilePath, "utf8");
  const { data, content } = matter(fileContent);

  return (
    <Container>
      <Image
        src={avatarPath}
        alt={username + " avatar"}
        width={2400}
        height={960}
      />
      <h1 className="text-display-3">
        {data.name || username}
      </h1>

      <div className="flex flex-wrap gap-2">
        {data.regalia?.map((item: string) => (
          <Badge key={item} variant="tonal-card-static" size='chip-medium'>
            {item}
          </Badge>
        ))}
      </div>
      <div className="border-t pt-6 text-body-1 whitespace-pre-wrap">
        {content}
      </div>
    </Container>
  )
}
