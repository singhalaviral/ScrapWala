package scrapwala.services;
import java.util.List;
import scrapwala.response.AdminDto;
public interface AdminService  {
	public List<AdminDto> getAllAdmins();
	public AdminDto getAdminById(int id);
	public AdminDto updateAdmin(AdminDto adminDto, int id);
	public void deleteAdmin(int id);
	public AdminDto saveAdmin(AdminDto adminDto);
}
